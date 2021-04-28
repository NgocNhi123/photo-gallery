class ImageController {
  constructor({ deleteService, getAllService, setFavoriteService }) {
    this.deleteService = deleteService;
    this.getAllService = getAllService;
    this.setFavoriteService = setFavoriteService;
  }

  async delete(req, res) {}
  async getAll(req, res) {
    try {
      const result = this.getAll.execute();
      if (!result) throw new Error("Fetch data failed");
      res.json({ valid: true, message: "Success", images: result.images });
    } catch (err) {
      res.json({ valid: false, message: err.message });
    }
  }
  async setFavorite(req, res) {}
  async getAllFavorite(req, res) {}
}

module.exports = ImageController;
