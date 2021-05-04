class UpdatePasswordService {
  constructor({ userDaos, passwordHasher }) {
    this.userDaos = userDaos;
    this.passwordHasher = passwordHasher;

    this.execute = this.execute.bind(this);
  }

  async execute(userId, newPass) {
    const hashedPassword = await this.passwordHasher.hash(newPass);
    const result = await this.userDaos.updatePassword(userId, hashedPassword);
    return result;
  }
}

module.exports = UpdatePasswordService;
