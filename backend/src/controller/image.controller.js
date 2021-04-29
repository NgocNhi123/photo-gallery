class ImageController {
  constructor({
    deleteService,
    getAllService,
    setFavoriteService,
    getAllFavoriteService,
  }) {
    this.deleteService = deleteService;
    this.getAllService = getAllService;
    this.setFavoriteService = setFavoriteService;
  }

  async delete(req, res) {}
  async getAll(req, res) {
    try {
      const result = this.getAllService.execute();
      if (!result) throw new Error("Fetch data failed");
      res.json({ valid: true, message: "Success", images: result.images });
    } catch (err) {
      res.json({ valid: false, message: err.message });
    }
  }
  async setFavorite(req, res) {
    try {
      const { userId, favorite } = req.body;
      const result = this.setFavoriteService.execute(userId, favorite);
      if (!result) throw new Error("set favorite failed");
      res.json({ valid: true, message: "success" });
    } catch (err) {
      res.json({ valid: true, message: err.message });
    }
  }
  async getAllFavorite(req, res) {
    try {
      const result = this.getAllFavoriteService.execute();
      if (!result) throw new Error("Fetch data failed");
      res.json({ valid: true, message: "Success", images: result.images });
    } catch (err) {
      res.json({ valid: false, message: err.message });
    }
  }
}

module.exports = ImageController;
