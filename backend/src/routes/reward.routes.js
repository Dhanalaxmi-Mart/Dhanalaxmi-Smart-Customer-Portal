const express = require("express");

const {
  getRewards,
  redeemReward,
} = require("../controllers/reward.controller");

const {
  authenticate,
  authorize,
} = require("../middleware/auth.middleware");

const router = express.Router();

// All reward routes require login
router.use(authenticate);

// ADMIN and CASHIER can view reward history
router.get(
  "/",
  authorize("ADMIN", "CASHIER"),
  getRewards
);

// ADMIN and CASHIER can redeem an eligible reward
router.post(
  "/redeem",
  authorize("ADMIN", "CASHIER"),
  redeemReward
);

module.exports = router;