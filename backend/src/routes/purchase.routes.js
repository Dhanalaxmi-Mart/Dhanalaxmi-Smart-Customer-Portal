const express = require("express");

const {
  getPurchases,
  createPurchase,
} = require("../controllers/purchase.controller");

const {
  authenticate,
  authorize,
} = require("../middleware/auth.middleware");

const router = express.Router();

// All purchase routes require login
router.use(authenticate);

// ADMIN and CASHIER can view purchases
router.get(
  "/",
  authorize("ADMIN", "CASHIER"),
  getPurchases
);

// ADMIN and CASHIER can create bills/purchases
router.post(
  "/",
  authorize("ADMIN", "CASHIER"),
  createPurchase
);

module.exports = router;