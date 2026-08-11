const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = path.resolve(
  __dirname,
  "../../uploads/offers"
);

function ensureUploadDirectory() {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, {
      recursive: true,
    });
  }
}

const storage = multer.diskStorage({
  destination: (
    req,
    file,
    cb
  ) => {
    try {
      ensureUploadDirectory();

      cb(null, uploadDir);
    } catch (error) {
      cb(error);
    }
  },

  filename: (
    req,
    file,
    cb
  ) => {
    const ext = path
      .extname(file.originalname)
      .toLowerCase();

    const baseName = path
      .basename(
        file.originalname,
        ext
      )
      .replace(
        /[^a-zA-Z0-9-_]/g,
        "-"
      );

    const uniqueName =
      `${Date.now()}-${baseName}${ext}`;

    cb(
      null,
      uniqueName
    );
  },
});

const fileFilter = (
  req,
  file,
  cb
) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  if (
    !allowedTypes.includes(
      file.mimetype
    )
  ) {
    return cb(
      new Error(
        "Only JPG, PNG, and WEBP images are allowed."
      )
    );
  }

  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,

  limits: {
    fileSize:
      5 * 1024 * 1024,
  },
});

module.exports = upload;