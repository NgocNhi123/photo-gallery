class GetAllFavoriteService {
  constructor({ imageDaos }) {
    this.imageDaos = imageDaos;
  }

  async execute() {
    const images = await this.imageDaos.getAllFavorite();
    return { images };
  }
}

module.exports = GetAllFavoriteService;
