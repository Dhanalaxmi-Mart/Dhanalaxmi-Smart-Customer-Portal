const express = require("express");

const {
  getCustomers,
  createCustomer,
  updateCustomer,
  setCustomerStamps,
} = require("../controllers/customer.controller");

const router = express.Router();

router.get("/", getCustomers);
router.post("/", createCustomer);
router.put("/:id", updateCustomer);
router.put("/:id/stamps", setCustomerStamps);

module.exports = router;