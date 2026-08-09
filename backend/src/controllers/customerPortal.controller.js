const prisma = require("../lib/prisma");

async function getCustomerPortal(req, res) {
  try {
    const mobile = String(
      req.params.mobile || ""
    ).trim();

    if (!/^\d{10}$/.test(mobile)) {
      return res.status(400).json({
        success: false,
        message:
          "Please enter a valid 10-digit mobile number.",
      });
    }

    const customer =
      await prisma.customer.findUnique({
        where: {
          mobile,
        },
        select: {
          id: true,
          name: true,
          mobile: true,
          stamps: true,
          totalVisits: true,

          rewardRedemptions: {
            select: {
              giftName: true,
              redemptionDate: true,
              redemptionTime: true,
              status: true,
            },
            orderBy: {
              createdAt: "desc",
            },
            take: 5,
          },
        },
      });

    if (!customer) {
      return res.status(404).json({
        success: false,
        message:
          "No loyalty account found for this mobile number.",
      });
    }

    const stampsRequired = 5;

    const currentStamps = Math.max(
      0,
      Number(customer.stamps) || 0
    );

    const remainingStamps = Math.max(
      stampsRequired - currentStamps,
      0
    );

    const rewardEligible =
      currentStamps >= stampsRequired;

    return res.json({
      success: true,

      customer: {
        name: customer.name,
        mobile: customer.mobile,
        totalVisits:
          customer.totalVisits,
      },

      loyalty: {
        currentStamps,
        stampsRequired,
        remainingStamps,
        rewardEligible,
      },

      recentRewards:
        customer.rewardRedemptions,
    });
  } catch (error) {
    console.error(
      "Customer portal lookup error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to check loyalty status right now.",
    });
  }
}

module.exports = {
  getCustomerPortal,
};