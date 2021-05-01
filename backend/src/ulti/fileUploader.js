const multer = require("multer");

module.exports = class FileUploader {
  constructor() {
    this.upload = multer();
  }
  uploadSinge() {
    return this.upload.single();
  }
};
