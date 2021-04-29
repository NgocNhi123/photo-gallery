const bcrypt = require("bcrypt");

class PasswordHasher {
  constructor() {}

  async isMatched(input, password) {
    const result = await bcrypt.compare(input, password);
    return result;
  }

  async hash(password) {
    try {
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }
}

module.exports = PasswordHasher;
