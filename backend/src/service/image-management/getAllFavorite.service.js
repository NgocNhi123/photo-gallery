class GetAllFavoriteService {
  constructor({ imageDaos }) {
    this.imageDaos = imageDaos;
  }

  async execute(userId) {
    const images = await this.imageDaos.getAllFavorite(userId);
    return { images };
  }
}

module.exports = GetAllFavoriteService;
