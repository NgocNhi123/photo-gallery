class SetFavoriteService {
  constructor({ imageDaos }) {
    this.imageDaos = imageDaos;
  }

  async execute(id, payload) {
    const updatedOne = this.imageDaos.updateFavorite(id, payload);
    return updatedOne;
  }
}

module.exports = SetFavoriteService;
