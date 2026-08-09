const prisma = require("../lib/prisma");
exports.getOffers = async (req, res) => {
  try {
    const offers = await prisma.offer.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      offers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createOffer = async (req, res) => {
  try {
    const {
      title,
      description,
      imageUrl,
      startDate,
      endDate,
    } = req.body;

    const offer = await prisma.offer.create({
      data: {
        title,
        description,
        imageUrl,
        startDate,
        endDate,
      },
    });

    res.status(201).json({
      success: true,
      offer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateOffer = async (req, res) => {
  try {
    const { id } = req.params;

    const offer = await prisma.offer.update({
      where: { id },
      data: req.body,
    });

    res.json({
      success: true,
      offer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteOffer = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.offer.delete({
      where: { id },
    });

    res.json({
      success: true,
      message: "Offer deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getPublicOffers = async (req, res) => {
  try {
    const today = new Date()
      .toISOString()
      .split("T")[0];

    const offers = await prisma.offer.findMany({
      where: {
        isActive: true,
        startDate: {
          lte: today,
        },
        endDate: {
          gte: today,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json({
      success: true,
      offers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};