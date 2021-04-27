class LoginService {
  constructor({ userDaos, authentication }) {
    this.userDaos = userDaos;
  }

  async execute(email, password) {
    let user = await this.userGateway.findByEmail(email);
    if (
      user &&
      (await this.authentication.isMatched(password, user.password))
    ) {
      const stringUser = JSON.stringify(user);
      return {
        valid: true,
        token: this.authentication.sign(stringUser),
        userId: user.id,
        ava: user.ava,
        type: user.type,
      };
    }
    return { valid: false, curUser: {} };
  }
}

module.exports = LoginService;
