const multer = require("multer");
const { promisify } = require("util");
const fs = require("fs");

module.exports = class FileUploader {
  constructor() {
    this.uploadSinge = this.uploadSingle.bind(this);
    this.saveUploadFile = this.saveUploadFile.bind(this);
  }

  uploadSingle() {
    const upload = multer();
    return upload.single();
  }

  async saveUploadFile(filename, file) {
    const pipeline = promisify(require("stream").pipeline);
    await pipeline(
      file.stream,
      fs.createWriteStream(`${__dirname}/../../public/${filename}`)
    );
  }
};
