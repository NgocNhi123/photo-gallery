class GetAllFavoriteService {
  constructor({ imageDaos }) {
    this.imageDaos = imageDaos;
  }

  async execute() {
    const images = this.imageDaos.getAllFavorite({ deleteAt: null });
    return { images };
  }
}

module.exports = GetAllFavoriteService;
