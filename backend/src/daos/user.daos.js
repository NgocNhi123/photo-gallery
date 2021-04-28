const mongoose = require("mongoose");

class UserDaos {
  constructor({ userModel }) {
    this.userModel = userModel;
  }

  async findByUsername(username) {
    const user = await this.userModel.findOne({ username });
    if (user) return user;
    return null;
  }

  async findByEmail(email) {
    const user = await this.userModel.findOne({ email });
    if (user) return user;
    return null;
  }

  async findById(id) {
    const user = await this.userModel.findById({ _id: id });
    if (user) return user;
    return null;
  }

  async createNewUser(username, email, password) {
    try {
      const newUser = await this.userModel.create({
        username,
        email,
        password,
      });
      return newUser;
    } catch (err) {
      console.log(err.message);
      return null;
    }
  }
}

module.exports = UserDaos;
