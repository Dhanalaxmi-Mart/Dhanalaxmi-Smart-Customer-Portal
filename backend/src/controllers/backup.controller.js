const fs = require("fs");
const path = require("path");
const prisma = require("../lib/prisma");

const DATABASE_PATH = path.resolve(
  __dirname,
  "../../dhanalaxmi.db"
);

const BACKUP_DIR = path.resolve(
  __dirname,
  "../../backups"
);

function ensureBackupDirectory() {
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, {
      recursive: true,
    });
  }
}

function createBackupFileName() {
  const now = new Date();

  const pad = (value) =>
    String(value).padStart(2, "0");

  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1);
  const day = pad(now.getDate());
  const hour = pad(now.getHours());
  const minute = pad(now.getMinutes());
  const second = pad(now.getSeconds());

  return `dhanalaxmi-backup-${year}-${month}-${day}_${hour}-${minute}-${second}.db`;
}

async function createBackup(req, res) {
  try {
    ensureBackupDirectory();

    if (!fs.existsSync(DATABASE_PATH)) {
      return res.status(404).json({
        success: false,
        message: "Database file could not be found.",
      });
    }

    const fileName =
      createBackupFileName();

    const destinationPath = path.join(
      BACKUP_DIR,
      fileName
    );

    /*
     * Ensure SQLite has flushed pending
     * WAL changes before copying.
     */
    try {
      await prisma.$executeRawUnsafe(
        "PRAGMA wal_checkpoint(FULL);"
      );
    } catch (checkpointError) {
      console.warn(
        "SQLite checkpoint warning:",
        checkpointError.message
      );
    }

    await fs.promises.copyFile(
      DATABASE_PATH,
      destinationPath
    );

    const stats =
      await fs.promises.stat(
        destinationPath
      );
// Keep only the latest 20 backups
const MAX_BACKUPS = 20;

const files =
  await fs.promises.readdir(
    BACKUP_DIR
  );

const backupFiles =
  await Promise.all(
    files
      .filter((fileName) =>
        fileName.endsWith(".db")
      )
      .map(async (fileName) => {
        const filePath = path.join(
          BACKUP_DIR,
          fileName
        );

        const fileStats =
          await fs.promises.stat(
            filePath
          );

        return {
          fileName,
          modifiedTime:
            fileStats.mtime.getTime(),
        };
      })
  );

backupFiles.sort(
  (a, b) =>
    b.modifiedTime -
    a.modifiedTime
);

const oldBackups =
  backupFiles.slice(MAX_BACKUPS);

for (const backup of oldBackups) {
  await fs.promises.unlink(
    path.join(
      BACKUP_DIR,
      backup.fileName
    )
  );

  console.log(
    `Deleted old backup: ${backup.fileName}`
  );
}
    return res.status(201).json({
      success: true,
      message:
        "Database backup created successfully.",
      backup: {
        fileName,
        size: stats.size,
        createdAt:
          stats.birthtime ||
          stats.ctime,
      },
    });
  } catch (error) {
    console.error(
      "Create backup error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to create database backup.",
    });
  }
}

async function getBackups(req, res) {
  try {
    ensureBackupDirectory();

    const files =
      await fs.promises.readdir(
        BACKUP_DIR
      );

    const backups =
      await Promise.all(
        files
          .filter((fileName) =>
            fileName.endsWith(".db")
          )
          .map(async (fileName) => {
            const filePath =
              path.join(
                BACKUP_DIR,
                fileName
              );

            const stats =
              await fs.promises.stat(
                filePath
              );

            return {
              fileName,
              size: stats.size,
              createdAt:
                stats.birthtime ||
                stats.ctime,
            };
          })
      );

    backups.sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    );

    return res.json(backups);
  } catch (error) {
    console.error(
      "Get backups error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to load backup history.",
    });
  }
}
async function downloadBackup(req, res) {
  try {
    const { fileName } = req.params;

    const filePath = path.join(
      BACKUP_DIR,
      fileName
    );

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        message: "Backup file not found.",
      });
    }

    return res.download(filePath);
  } catch (error) {
    console.error(
      "Download backup error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to download backup.",
    });
  }
}
const deleteBackup = async (req, res) => {
  try {
    const { fileName } = req.params;

    const backupPath = path.join(
      __dirname,
      "../../backups",
      fileName
    );

    if (!fs.existsSync(backupPath)) {
      return res.status(404).json({
        success: false,
        message: "Backup file not found",
      });
    }

    fs.unlinkSync(backupPath);

    res.json({
      success: true,
      message: "Backup deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete backup",
    });
  }
};
module.exports = {
  createBackup,
  getBackups,
  downloadBackup,
  deleteBackup,
};