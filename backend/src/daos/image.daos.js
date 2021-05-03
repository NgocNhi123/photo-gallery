const mongoose = require("mongoose");

class ImageDaos {
  constructor({ imageModel }) {
    this.imageModel = imageModel;
  }
  async getAll(userId) {
    try {
      const images = await this.imageModel.find({
        deleteAt: null,
        userId: userId,
      });
      return images;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }

  async updateFavorite(userId, payload, id) {
    try {
      const updated = await this.imageModel.findOneAndUpdate(
        {
          _id: mongoose.Types.ObjectId(id),
          userId: mongoose.Types.ObjectId(userId),
        },
        { isFavorite: payload },
        { returnOriginal: false, useFindAndModify: false }
      );
      return updated;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }

  async getAllFavorite(userId) {
    try {
      const images = await this.imageModel.find({
        isFavorite: true,
        deleteAt: null,
        userId: userId,
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

  async delete(id, userId) {
    try {
      const updated = await this.imageModel.findOneAndUpdate(
        { _id: id, userId: mongoose.Types.ObjectId(userId) },
        { deleteAt: new Date().toString().substring(0, 21) },
        { returnOriginal: false, useFindAndModify: false }
      );
      if (!updated) throw new Error("not img found");
      return updated;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }
}

module.exports = ImageDaos;
