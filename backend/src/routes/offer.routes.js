const express = require("express");

const upload = require(
  "../middleware/upload.middleware"
);

const {
  getOffers,
  createOffer,
  updateOffer,
  deleteOffer,
  getPublicOffers,
} = require("../controllers/offer.controller");

const router = express.Router();

/* Public */
router.get(
  "/public",
  getPublicOffers
);

/* Admin */
router.get(
  "/",
  getOffers
);

router.post(
  "/",
  upload.single("image"),
  createOffer
);

router.put(
  "/:id",
  upload.single("image"),
  updateOffer
);

router.delete(
  "/:id",
  deleteOffer
);

module.exports = router;