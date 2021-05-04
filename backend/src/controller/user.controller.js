class UserController {
  constructor({ loginService, registerService, updatePasswordService }) {
    this.loginService = loginService;
    this.registerService = registerService;
    this.updatePasswordService = updatePasswordService;

    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await this.loginService.execute(email, password);
      if (!result) throw new Error("Login failed");
      res.json({
        valid: true,
        message: "Login success",
        token: result.token,
        username: result.username,
        email: result.email,
      });
    } catch (err) {
      res.json({ valid: false, message: err.message });
    }
  }

  async register(req, res) {
    try {
      const { username, email, password } = req.body;
      const result = await this.registerService.execute(
        username,
        email,
        password
      );
      if (!result) throw new Error("Register failed");
      if (!result.valid) throw new Error(`${result.message}`);
      res.json({
        valid: true,
        message: "Register success",
      });
    } catch (err) {
      res.json({
        valid: false,
        message: err.message,
      });
    }
  }

  async updatePassword(req, res) {
    try {
      console.log("vo day roi");
      const { newPass } = req.body;
      const curUser = req.curUser;
      const result = await this.updatePassword.execute(curUser._id, newPass);
      if (!result) throw new Error("update password failed");
      res.json({ valid: true, message: "Success" });
    } catch (err) {
      res.json({ valid: false, message: err.message });
    }
  }
}

module.exports = UserController;
