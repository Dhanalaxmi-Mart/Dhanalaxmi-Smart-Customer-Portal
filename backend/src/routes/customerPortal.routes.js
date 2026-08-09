const express = require("express");

const {
  getCustomerPortal,
} = require(
  "../controllers/customerPortal.controller"
);

const router = express.Router();

/*
 * PUBLIC CUSTOMER ROUTE
 *
 * Do not attach staff JWT authentication
 * middleware here.
 */
router.get(
  "/:mobile",
  getCustomerPortal
);

module.exports = router;