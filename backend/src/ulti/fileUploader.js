const multer = require("multer");
const { promisify } = require("util");
const fs = require("fs");

module.exports = class FileUploader {
  constructor() {
    this.upload = multer();
    this.pipeline = promisify(require("stream").pipeline);

    this.uploadSinge = this.uploadSingle.bind(this);
    this.saveUploadFile = this.saveUploadFile.bind(this);
  }

  uploadSingle() {
    return this.upload.single();
  }

  async saveUploadFile(filename, file) {
    await this.pipeline(
      file.stream,
      fs.createWriteStream(`${__dirname}/../../public/${filename}`)
    );
  }
};
