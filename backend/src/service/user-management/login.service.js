class LoginService {
  constructor({ userDaos, authentication }) {
    this.userDaos = userDaos;
    this.authentication = authentication;
  }

  async execute(email, password) {
    try {
      let user = await this.userDaos.findByEmail(email);
      if (
        user &&
        (await this.authentication.isPasswordMatched(password, user.password))
      ) {
        const stringUser = JSON.stringify(user);
        return {
          token: this.authentication.sign(stringUser),
          username: user.username,
          email: user.email,
        };
      }
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }
}

module.exports = LoginService;
