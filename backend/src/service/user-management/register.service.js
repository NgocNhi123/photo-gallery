class RegisterService {
  constructor({ userDaos, passwordHasher }) {
    this.userDaos = userDaos;
    this.passwordHasher = passwordHasher;
  }

  async execute(username, email, password) {
    const checkEmail = this.userDaos.findByEmail(email);
    if (checkEmail) return { valid: false, message: "This email has been used" };
    const checkName = this.userDaos.findByUsername(username);
    if (checkName) return { valid: false, message: "This username has been used" };
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