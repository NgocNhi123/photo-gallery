class ImageDaos {
  constructor({ imageModel }) {
    this.imageModel = imageModel;
  }
  async getAll() {
    try {
      const images = await this.imageModel.find({ deleteAt: null });
      return images;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }

  async updateFavorite(id, payload) {
    try {
      const updated = await this.imageModel.updateOne(
        { _id: id },
        { isFavorite: payload }
      );
      return updated;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }

  async getAllFavorite() {
    try {
      const images = await this.imageModel.find({
        isFavorite: true,
        deleteAt: null,
      });
      return images;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }

  async create(filename, des, userId) {
    try {
      const newImg = await this.imageModel.create({
        path: `/${filename}`,
        userId: userId,
        caption: des,
      });
      return newImg;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }

  async delete(imgId) {
    try {
      const img = this.imageModel.findOneAndDelete({ _id: imgId });
      if (!img) throw new Error("not img found");
      return img;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }
}

module.exports = ImageDaos;
