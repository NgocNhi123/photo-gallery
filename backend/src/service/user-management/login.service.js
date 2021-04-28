class LoginService {
  constructor({ userDaos, authentication }) {
    this.userDaos = userDaos;
    this.authentication = authentication;
  }

  async execute(email, password) {
    let user = await this.userGateway.findByEmail(email);
    if (
      user &&
      (await this.authentication.isMatched(password, user.password))
    ) {
      const stringUser = JSON.stringify(user);
      return {
        token: this.authentication.sign(stringUser),
      };
    }
    return null;
  }
}

module.exports = LoginService;
