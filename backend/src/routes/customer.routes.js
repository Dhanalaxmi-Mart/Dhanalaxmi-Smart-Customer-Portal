const express = require("express");

const {
  getCustomers,
  createCustomer,
  updateCustomer,
  setCustomerStamps,
} = require("../controllers/customer.controller");

const {
  authenticate,
  authorize,
} = require("../middleware/auth.middleware");

const router = express.Router();

// All customer routes require a valid JWT
router.use(authenticate);

// ADMIN and CASHIER can view customers
router.get(
  "/",
  authorize("ADMIN", "CASHIER"),
  getCustomers
);

// ADMIN and CASHIER can create customers
router.post(
  "/",
  authorize("ADMIN", "CASHIER"),
  createCustomer
);

// Only ADMIN can edit customer details
router.put(
  "/:id",
  authorize("ADMIN"),
  updateCustomer
);

// Only ADMIN can manually change stamp balance
router.put(
  "/:id/stamps",
  authorize("ADMIN"),
  setCustomerStamps
);

module.exports = router;