class GetAllService {
  constructor({ imageDaos }) {
    this.imageDaos = imageDaos;
  }

  async execute() {
    const images = this.imageDaos.getAll();
    return { images };
  }
}

module.exports = GetAllService;
