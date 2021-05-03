class GetAllService {
  constructor({ imageDaos }) {
    this.imageDaos = imageDaos;
  }

  async execute(userId) {
    const images = await this.imageDaos.getAll(userId);
    return { images };
  }
}

module.exports = GetAllService;
