const express = require("express");

const {
  getUsers,
  createUser,
  updateUser,
  resetUserPassword,
} = require(
  "../controllers/user.controller"
);

const {
  authenticate,
  authorize,
} = require(
  "../middleware/auth.middleware"
);

const router = express.Router();

/*
 * Every /api/users endpoint:
 * 1. Requires login
 * 2. Requires ADMIN role
 */
router.use(
  authenticate,
  authorize("ADMIN")
);

router.get(
  "/",
  getUsers
);

router.post(
  "/",
  createUser
);

router.put(
  "/:id",
  updateUser
);

router.put(
  "/:id/password",
  resetUserPassword
);

module.exports = router;