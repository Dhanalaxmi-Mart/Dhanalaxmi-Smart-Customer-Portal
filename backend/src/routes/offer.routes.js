const express = require("express");

const {
  getOffers,
  createOffer,
  updateOffer,
  deleteOffer,
  getPublicOffers,
} = require("../controllers/offer.controller");

const router = express.Router();

/* Public */
router.get("/public", getPublicOffers);

/* Admin */
router.get("/", getOffers);
router.post("/", createOffer);
router.put("/:id", updateOffer);
router.delete("/:id", deleteOffer);

module.exports = router;