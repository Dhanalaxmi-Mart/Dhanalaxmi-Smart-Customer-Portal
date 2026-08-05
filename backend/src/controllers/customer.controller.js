const prisma = require("../lib/prisma");

async function getCustomers(req, res) {
  try {
    const customers = await prisma.customer.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(customers);
  } catch (error) {
    console.error("Get customers error:", error);

    res.status(500).json({
      message: "Unable to fetch customers",
    });
  }
}

async function createCustomer(req, res) {
  try {
    const { name, mobile } = req.body;

    if (!name || !mobile) {
      return res.status(400).json({
        message: "Name and mobile are required",
      });
    }

    const customer = await prisma.customer.create({
      data: {
        name: name.trim(),
        mobile: mobile.trim(),
      },
    });

    res.status(201).json(customer);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({
        message:
          "A customer with this mobile number already exists",
      });
    }

    console.error("Create customer error:", error);

    res.status(500).json({
      message: "Unable to create customer",
    });
  }
}

async function updateCustomer(req, res) {
  try {
    const { id } = req.params;

    const {
      name,
      mobile,
      dob,
      anniversary,
      gender,
      address,
    } = req.body;

    const customer = await prisma.customer.update({
      where: {
        id,
      },
      data: {
        name: name?.trim(),
        mobile: mobile?.trim(),
        dob,
        anniversary,
        gender,
        address,
      },
    });

    res.json(customer);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({
        message:
          "A customer with this mobile number already exists",
      });
    }

    console.error("Update customer error:", error);

    res.status(500).json({
      message: "Unable to update customer",
    });
  }
}

module.exports = {
  getCustomers,
  createCustomer,
  updateCustomer,
  setCustomerStamps,
};
async function setCustomerStamps(req, res) {
  try {
    const { id } = req.params;
    const { stamps } = req.body;

    const updatedCustomer =
      await prisma.customer.update({
        where: {
          id: String(id),
        },
        data: {
          stamps: Number(stamps) || 0,
        },
      });

    return res.json(updatedCustomer);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message:
        "Unable to update customer stamps.",
    });
  }
}