const multer = require("multer");

class ImageController {
  constructor({
    deleteService,
    getAllService,
    setFavoriteService,
    getAllFavoriteService,
    uploadService,
  }) {
    this.deleteService = deleteService;
    this.getAllService = getAllService;
    this.setFavoriteService = setFavoriteService;
    this.uploadService = uploadService;
    this.getAllFavoriteService = getAllFavoriteService;

    this.delete = this.delete.bind(this);
    this.upload = this.upload.bind(this);
    this.getAll = this.getAll.bind(this);
    this.setFavorite = this.setFavorite.bind(this);
    this.getAllFavorite = this.getAllFavorite.bind(this);
  }

  async delete(req, res) {
    try {
      const { id } = req.body;
      const curUser = req.curUser;
      const result = await this.deleteService.execute(id, curUser._id);
      if (!result) throw new Error("Delete failed");
      res.json({ valid: true, message: "delete success" });
    } catch (err) {
      res.json({ valid: false, message: err.message });
    }
  }

  async upload(req, res) {
    try {
      const { des } = req.body;
      const newFileName = req.newFileName;
      const curUser = req.curUser;
      const result = this.uploadService.execute(newFileName, des, curUser._id);
      if (!result) throw new Error("Upload failed");
      res.json({ valid: true, message: "Upload success" });
    } catch (err) {
      res.json({ valid: false, message: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const curUser = req.curUser;
      const result = await this.getAllService.execute(curUser._id);
      if (!result) throw new Error("Fetch data failed");
      res.json({ valid: true, message: "Success", images: result.images });
    } catch (err) {
      res.json({ valid: false, message: err.message });
    }
  }

  async setFavorite(req, res) {
    try {
      const { id, favorite } = req.body;
      const curUser = req.curUser;
      const result = this.setFavoriteService.execute(curUser._id, favorite, id);
      if (!result) throw new Error("set favorite failed");
      res.json({ valid: true, message: "success" });
    } catch (err) {
      res.json({ valid: true, message: err.message });
    }
  }

  async getAllFavorite(req, res) {
    try {
      const curUser = req.curUser;
      const result = await this.getAllFavoriteService.execute(curUser._id);
      if (!result) throw new Error("Fetch data failed");
      res.json({ valid: true, message: "Success", images: result.images });
    } catch (err) {
      res.json({ valid: false, message: err.message });
    }
  }
}

module.exports = ImageController;
