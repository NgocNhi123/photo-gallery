const multer = require("multer");

module.export = class FileUploader {
  constructor() {
    this.upload = multer();
  };
  uploadSinge() {
    return this.upload.single();
  }
}