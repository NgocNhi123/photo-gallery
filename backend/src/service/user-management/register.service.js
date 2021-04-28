class RegisterService {
  constructor({ userDaos, passwordHasher }) {
    this.userDaos = userDaos;
    this.passwordHasher = passwordHasher;
  }

  async execute(username, email, password) {
    const checkEmail = this.userDaos.findByEmail(email);
    if (checkEmail) return { valid: false, message: "email" };
    const checkName = this.userDaos.findByUsername(username);
    if (checkName) return { valid: false, message: "username" };
    const hashedPassword = await this.passwordHasher.hash(password);
    const newUser = this.userDaos.createNewUser(
      username,
      email,
      hashedPassword
    );
    if (!newUser) return null;
    return newUser;
  }
}

module.exports = RegisterService;
