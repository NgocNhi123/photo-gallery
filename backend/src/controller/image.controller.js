class ImageController {
  constructor({ deleteService, getAllService, setFavoriteService }) {
    this.deleteService = deleteService;
    this.getAllService = getAllService;
    this.setFavoriteService = setFavoriteService;
  }

  async delete(req, res) {}
  async getAll(req, res) {}
  async setFavorite(req, res) {}
  async getAllFavorite(req, res) {}
}

module.exports = ImageController;
