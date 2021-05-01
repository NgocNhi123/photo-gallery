class UploadService {
  constructor({ imageDaos, fileUploader }) {
    this.imageDaos = imageDaos;
    this.fileUploader = fileUploader;
  }

  async execute(file, des, userId) {
    try {
      if (
        file.detectedFileExtension != ".jpg" &&
        file.detectedFileExtension != ".jpeg" &&
        file.detectedFileExtension != ".png"
      ) {
        throw new Error("Invalid file type");
      }
      const filename = new Date().toString() + file.detectedFileExtension;
      const result = await this.imageDaos.createImage(filename, des, userId);
      if (!result) throw new Error("upload image failed");
      await this.fileUploader.saveUploadFile(filename, file);
      return file;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }
}

module.exports = UploadService;
