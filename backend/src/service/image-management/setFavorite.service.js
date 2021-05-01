class SetFavoriteService {
  constructor({ imageDaos }) {
    this.imageDaos = imageDaos;
  }

  async execute(userId, payload, id) {
    const updatedOne = this.imageDaos.updateFavorite(userId, payload, id);
    return updatedOne;
  }
}

module.exports = SetFavoriteService;
