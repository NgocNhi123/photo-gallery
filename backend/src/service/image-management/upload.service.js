class UploadService {
  constructor({ imageDaos, fileUploader }) {
    this.imageDaos = imageDaos;
    this.fileUploader = fileUploader;
  }

  async execute(filename, des, userId) {
    try {
      const result = await this.imageDaos.create(filename, des, userId);
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
