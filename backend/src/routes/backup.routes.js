const express = require("express");

const {
  createBackup,
  getBackups,
  downloadBackup,
  deleteBackup,
} = require("../controllers/backup.controller");

const {
  authenticate,
  authorize,
} = require("../middleware/auth.middleware");

const router = express.Router();

// All backup routes require ADMIN access
router.use(
  authenticate,
  authorize("ADMIN")
);

// Get backup history
router.get("/", getBackups);

// Create new backup
router.post("/", createBackup);

// Download backup
router.get(
  "/:fileName/download",
  downloadBackup
);

// Delete backup
router.delete(
  "/:fileName",
  deleteBackup
);

module.exports = router;