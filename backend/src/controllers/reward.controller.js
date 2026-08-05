const prisma = require("../lib/prisma");

function getLocalDate() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(
    now.getMonth() + 1
  ).padStart(2, "0");
  const day = String(
    now.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getLocalTime() {
  return new Date().toLocaleTimeString(
    "en-IN",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );
}

async function getRewards(req, res) {
  try {
    const rewards =
      await prisma.rewardRedemption.findMany({
        include: {
          customer: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

    return res.json(rewards);
  } catch (error) {
    console.error(
      "Unable to fetch reward redemptions:",
      error
    );

    return res.status(500).json({
      message:
        "Unable to fetch reward redemptions.",
    });
  }
}

async function redeemReward(req, res) {
  try {
    const {
      customerId,
      giftName,
      giftValue,
      redeemedBy,
    } = req.body;

    const normalizedCustomerId = String(
      customerId || ""
    ).trim();

    const normalizedGiftName = String(
      giftName || ""
    ).trim();

    const normalizedRedeemedBy = String(
      redeemedBy || ""
    ).trim();

    const value = Number(giftValue);

    if (
      !normalizedCustomerId ||
      !normalizedGiftName ||
      !normalizedRedeemedBy ||
      !Number.isFinite(value) ||
      value < 0
    ) {
      return res.status(400).json({
        message:
          "Customer, gift name, valid internal gift value, and staff name are required.",
      });
    }

    const customer =
      await prisma.customer.findUnique({
        where: {
          id: normalizedCustomerId,
        },
      });

    if (!customer) {
      return res.status(404).json({
        message:
          "Customer could not be found.",
      });
    }

    const currentStamps =
      Number(customer.stamps) || 0;

    if (currentStamps < 5) {
      return res.status(400).json({
        message:
          "At least 5 stamps are required to redeem the free gift.",
      });
    }

    const today = getLocalDate();
    const currentTime = getLocalTime();

    const result =
      await prisma.$transaction(
        async (tx) => {
          const reward =
            await tx.rewardRedemption.create({
              data: {
                customerId:
                  normalizedCustomerId,
                giftName:
                  normalizedGiftName,
                giftValue: value,
                redeemedBy:
                  normalizedRedeemedBy,
                stampsUsed: 5,
                redemptionDate: today,
                redemptionTime:
                  currentTime,
                status: "Redeemed",
              },
            });

          const stampTransaction =
            await tx.stampTransaction.create({
              data: {
                customerId:
                  normalizedCustomerId,
                billNumber: `REWARD-${reward.id}`,
                purchaseAmount: 0,
                cashierName:
                  normalizedRedeemedBy,
                transactionType:
                  "Gift Redeemed",
                transactionDate: today,
                transactionTime:
                  currentTime,
              },
            });

          const updatedCustomer =
            await tx.customer.update({
              where: {
                id: normalizedCustomerId,
              },
              data: {
                stamps: {
                  decrement: 5,
                },
              },
            });

          return {
            reward,
            stampTransaction,
            customer:
              updatedCustomer,
          };
        }
      );

    return res.status(201).json({
      success: true,
      message:
        "Free gift redeemed successfully. Five stamps have been deducted.",
      ...result,
    });
  } catch (error) {
    console.error(
      "Unable to redeem reward:",
      error
    );

    return res.status(500).json({
      message:
        error.message ||
        "Unable to redeem reward.",
    });
  }
}

module.exports = {
  getRewards,
  redeemReward,
};