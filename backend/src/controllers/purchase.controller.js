const prisma = require("../lib/prisma");

function getLocalDate() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(
    2,
    "0"
  );
  const day = String(now.getDate()).padStart(
    2,
    "0"
  );

  return `${year}-${month}-${day}`;
}

function getLocalTime() {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

async function getPurchases(req, res) {
  try {
    const purchases = await prisma.purchase.findMany({
      include: {
        customer: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json(purchases);
  } catch (error) {
    console.error(
      "Unable to fetch purchases:",
      error
    );

    return res.status(500).json({
      message: "Unable to fetch purchases.",
    });
  }
}

async function createPurchase(req, res) {
  try {
    const {
      customerId,
      billNumber,
      purchaseAmount,
      cashierName,
    } = req.body;

    const normalizedCustomerId = String(
      customerId || ""
    ).trim();

    const normalizedBillNumber = String(
      billNumber || ""
    ).trim();

    const normalizedCashierName = String(
      cashierName || ""
    ).trim();

    const amount = Number(purchaseAmount);

    if (
      !normalizedCustomerId ||
      !normalizedBillNumber ||
      !normalizedCashierName ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      return res.status(400).json({
        message:
          "Customer, bill number, purchase amount, and cashier name are required.",
      });
    }

    const customer = await prisma.customer.findUnique({
      where: {
        id: normalizedCustomerId,
      },
    });

    if (!customer) {
      return res.status(404).json({
        message: "Customer could not be found.",
      });
    }

    const existingPurchase =
      await prisma.purchase.findUnique({
        where: {
          billNumber: normalizedBillNumber,
        },
      });

    if (existingPurchase) {
      return res.status(409).json({
        message:
          "This bill number has already been recorded.",
      });
    }

    const today = getLocalDate();
    const currentTime = getLocalTime();

    const stampedToday =
      await prisma.stampTransaction.findFirst({
        where: {
          customerId: normalizedCustomerId,
          transactionDate: today,
          transactionType: "Stamp Added",
        },
      });

    let stampEarned = false;
    let stampReason = "";

    if (amount < 600) {
      stampReason =
        "Purchase amount is below ₹600.";
    } else if (Number(customer.stamps) >= 5) {
      stampReason =
        "Customer already has 5 stamps. Redeem the gift first.";
    } else if (stampedToday) {
      stampReason =
        "Customer has already received one stamp today.";
    } else {
      stampEarned = true;
      stampReason = "Eligible purchase";
    }

    const result = await prisma.$transaction(
      async (tx) => {
        const purchase = await tx.purchase.create({
          data: {
            customerId: normalizedCustomerId,
            billNumber: normalizedBillNumber,
            purchaseAmount: amount,
            cashierName: normalizedCashierName,
            stampEarned,
            stampReason,
            purchaseDate: today,
            purchaseTime: currentTime,
          },
        });

        let stampTransaction = null;

        if (stampEarned) {
          stampTransaction =
            await tx.stampTransaction.create({
              data: {
                customerId: normalizedCustomerId,
                billNumber: normalizedBillNumber,
                purchaseAmount: amount,
                cashierName: normalizedCashierName,
                transactionType: "Stamp Added",
                transactionDate: today,
                transactionTime: currentTime,
              },
            });
        }

        const customerUpdateData = {
          totalVisits: {
            increment: 1,
          },
          totalSpend: {
            increment: amount,
          },
        };

        if (stampEarned) {
          customerUpdateData.stamps = {
            increment: 1,
          };
        }

        const updatedCustomer =
          await tx.customer.update({
            where: {
              id: normalizedCustomerId,
            },
            data: customerUpdateData,
          });

        return {
          purchase,
          stampTransaction,
          customer: updatedCustomer,
        };
      }
    );

    return res.status(201).json({
      success: true,
      purchaseSaved: true,
      stampAwarded: stampEarned,
      message: stampEarned
        ? "Purchase saved and stamp added successfully."
        : `Purchase saved. No stamp awarded: ${stampReason}`,
      ...result,
    });
  } catch (error) {
    console.error(
      "Unable to create purchase:",
      error
    );

    return res.status(500).json({
      message:
        error.message ||
        "Unable to create purchase.",
    });
  }
}

module.exports = {
  getPurchases,
  createPurchase,
};