const express = require("express");

const {
  getRewards,
  redeemReward,
} = require("../controllers/reward.controller");

const router = express.Router();

router.get("/", getRewards);
router.post("/redeem", redeemReward);

module.exports = router;