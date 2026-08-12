const prisma = require("../lib/prisma");
const fs = require("fs");
const path = require("path");

/*
 * Safely delete an offer image.
 * imageUrl example:
 * /uploads/offers/123456-banner.jpg
 */
const deleteOfferImage = (imageUrl) => {
  try {
    if (!imageUrl) {
      return;
    }

    const fileName = path.basename(
      imageUrl
    );

    const filePath = path.resolve(
      __dirname,
      "../../uploads/offers",
      fileName
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);

      console.log(
        "Deleted old offer image:",
        fileName
      );
    }
  } catch (error) {
    /*
     * Image cleanup should not crash
     * the offer API.
     */
    console.error(
      "Offer image cleanup error:",
      error
    );
  }
};

exports.getOffers = async (req, res) => {
  try {
    const offers =
      await prisma.offer.findMany({
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

exports.createOffer = async (
  req,
  res
) => {
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

    const offer =
      await prisma.offer.create({
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

    /*
     * If Multer already saved an image
     * but Prisma failed, remove the
     * orphaned uploaded file.
     */
    if (req.file) {
      deleteOfferImage(
        `/uploads/offers/${req.file.filename}`
      );
    }

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateOffer = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const existingOffer =
      await prisma.offer.findUnique({
        where: {
          id,
        },
      });

    if (!existingOffer) {
      /*
       * Multer runs before the controller.
       * If an image was uploaded for an
       * invalid offer ID, remove it.
       */
      if (req.file) {
        deleteOfferImage(
          `/uploads/offers/${req.file.filename}`
        );
      }

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
      data.description =
        description;
    }

    if (startDate !== undefined) {
      data.startDate =
        startDate;
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
     * New banner selected:
     * point database to the new image.
     */
    if (req.file) {
      data.imageUrl =
        `/uploads/offers/${req.file.filename}`;
    }

    let offer;

    try {
      offer =
        await prisma.offer.update({
          where: {
            id,
          },
          data,
        });
    } catch (error) {
      /*
       * Database update failed after
       * Multer saved the new banner.
       * Delete the newly uploaded file.
       */
      if (req.file) {
        deleteOfferImage(
          `/uploads/offers/${req.file.filename}`
        );
      }

      throw error;
    }

    /*
     * Database update succeeded.
     * Only now is it safe to remove
     * the previous banner.
     */
    if (
      req.file &&
      existingOffer.imageUrl &&
      existingOffer.imageUrl !==
        offer.imageUrl
    ) {
      deleteOfferImage(
        existingOffer.imageUrl
      );
    }

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

exports.deleteOffer = async (
  req,
  res
) => {
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

    /*
     * Database deletion succeeded.
     * The associated banner is no
     * longer required.
     */
    if (existingOffer.imageUrl) {
      deleteOfferImage(
        existingOffer.imageUrl
      );
    }

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