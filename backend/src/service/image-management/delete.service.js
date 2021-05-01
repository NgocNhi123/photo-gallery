class DeleteService {
  constructor({ imageDaos }) {
    this.imageDaos = imageDaos;
  }

  async execute(id, userId) {
    const result = await this.imageDaos.delete(id, userId);
    return result;
  }
}

module.exports = DeleteService;
