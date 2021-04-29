class GetAllService {
  constructor({ imageDaos }) {
    this.imageDaos = imageDaos;
  }

  async execute() {
    const images = this.imageDaos.getAll({ deleteAt: null });
    return { images };
  }
}

module.exports = GetAllService;
