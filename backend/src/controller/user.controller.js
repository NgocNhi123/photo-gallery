class UserController {
  constructor({ loginService, registerService }) {
    this.loginService = loginService;
    this.registerService = registerService;
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = this.loginService.execute(email, password);
      if (!result) throw new Error("Login failed");
      res.json({
        valid: true,
        message: "Login success",
        token: result.token,
      });
    } catch (err) {
      res.json({ valid: false, message: err.message });
    }
  }

  async register(req, res) {
    try {
      const { username, email, password } = req.body;
      const result = this.registerService.execute(username, email, password);
      if (!result) throw new Error("Register failed");
      res.json({
        valid: true,
        message: "Register success",
      });
    } catch (err) {
      res.json({
        valid: true,
        message: err.message,
      });
    }
  }
}

module.exports = UserController;