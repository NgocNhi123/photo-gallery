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
      const updated = this.imageModel.updateOne(
        { _id: id },
        { isFavorite: payload }
      );
    } catch (err) {}
  }
}

module.exports = ImageDaos;
