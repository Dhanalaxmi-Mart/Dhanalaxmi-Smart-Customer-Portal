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
    console.error(
      "Get offers error:",
      error
    );

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
      startDate,
      endDate,
    } = req.body;

    const imageUrl = req.file
      ? `/uploads/offers/${req.file.filename}`
      : null;

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
    console.error(
      "Create offer error:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateOffer = async (req, res) => {
  try {
    const { id } = req.params;

    const existingOffer =
      await prisma.offer.findUnique({
        where: {
          id,
        },
      });

    if (!existingOffer) {
      return res.status(404).json({
        success: false,
        message: "Offer not found",
      });
    }

    const {
      title,
      description,
      startDate,
      endDate,
      isActive,
    } = req.body;

    const data = {};

    if (title !== undefined) {
      data.title = title;
    }

    if (description !== undefined) {
      data.description = description;
    }

    if (startDate !== undefined) {
      data.startDate = startDate;
    }

    if (endDate !== undefined) {
      data.endDate = endDate;
    }

    if (isActive !== undefined) {
      data.isActive =
        isActive === true ||
        isActive === "true";
    }

    /*
     * If a new image was uploaded,
     * replace imageUrl.
     *
     * If no image was uploaded,
     * existing imageUrl remains unchanged.
     */
    if (req.file) {
      data.imageUrl =
        `/uploads/offers/${req.file.filename}`;
    }

    const offer =
      await prisma.offer.update({
        where: {
          id,
        },
        data,
      });

    res.json({
      success: true,
      offer,
    });
  } catch (error) {
    console.error(
      "Update offer error:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteOffer = async (req, res) => {
  try {
    const { id } = req.params;

    const existingOffer =
      await prisma.offer.findUnique({
        where: {
          id,
        },
      });

    if (!existingOffer) {
      return res.status(404).json({
        success: false,
        message: "Offer not found",
      });
    }

    await prisma.offer.delete({
      where: {
        id,
      },
    });

    res.json({
      success: true,
      message:
        "Offer deleted successfully",
    });
  } catch (error) {
    console.error(
      "Delete offer error:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getPublicOffers = async (
  req,
  res
) => {
  try {
    const today = new Date()
      .toISOString()
      .split("T")[0];

    const offers =
      await prisma.offer.findMany({
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
    console.error(
      "Public offers error:",
      error
    );

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};