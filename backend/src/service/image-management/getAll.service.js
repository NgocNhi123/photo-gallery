class GetAllService {
  constructor({ imageDaos }) {
    this.imageDaos = imageDaos;
  }

  async execute() {
    const images = await this.imageDaos.getAll();
    return { images };
  }
}

module.exports = GetAllService;
