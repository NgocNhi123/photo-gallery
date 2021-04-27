class UserController {
  constructor({ loginService, registerService }) {
    this.loginService = loginService;
    this.registerService = registerService;
  }

  async login(req, res) {}
  async register(req, res) {}
}

module.exports = UserController;
