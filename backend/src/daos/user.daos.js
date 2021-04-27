const mongoose = require("mongoose");

class UserDaos {
  constructor({ userModel }) {
    this.userModel = userModel;
  }

  async findByUsername(name) {
    const user = await this.userModel.findOne({ name });
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
}

module.exports = UserDaos;
