const { promisify } = require("util");
const fs = require("fs");
const multer = require("multer")

module.exports = class FileUploader {
  constructor() {
    this.saveUploadFile = this.saveUploadFile.bind(this);
  }

  async saveUploadFile() {

    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, `${__dirname}/../../public/`);
      },
      filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
      }
    })

    const fileFilter = (req, file, cb) => {
      if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg"
      ) {
        cb(null, true);
      }
      cb(null, false);
    };

    const upload = multer({
      storage: storage,
      limits: { fileSize: 5000000 },
      fileFilter: fileFilter
    });
    return upload.single("file");
  }
};