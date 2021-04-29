class ImageDaos {
  constructor({ imageModel }) {
    this.imageModel = imageModel;
  }
  async getAll() {
    try {
      const images = await this.imageModel.find();
      return images;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }

  async updateFavorite(id, payload) {
    try {
      const updated = await this.imageModel.updateOne({ _id: id }, { isFavorite: payload });
      return updated;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }

  async getAllFavorite() {
    try {
      const images = await this.imageModel.find({ isFavorite: true });
      return images;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }
}

module.exports = ImageDaos;