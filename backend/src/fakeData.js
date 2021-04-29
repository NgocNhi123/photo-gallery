const mongoose = require("mongoose");
const config = require("../config.json");
const User = require("./model/User");
const Image = require("./model/Image");
const passwordHasher = require("./ulti/passwordHasher");

const passHasher = new passwordHasher();

mongoose.connect(config.Database.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  // eslint@disable@next@line no@console
  console.log("moongose is running");
  // fakeUserData("123456789");
  fakeImageData();
});

const fakeUserData = async (password) => {
  try {
    const hashedPass = await passHasher.hash(password);
    if (!hashedPass) {
      console.log("hash password failed");
      return;
    }
    const user = new User({
      username: "test",
      email: "abc@gmail.com",
      password: hashedPass,
    });
    await user.save();
    console.log("fake user data success");
  } catch (err) {
    console.log(err.message);
  }
};

const fakeImageData = async () => {
  try {
    const testUser = await User.findOne({ username: "test" });
    if (!testUser) {
      console.log("cant find test user");
      return;
    }
    for (let i = 1; i <= 10; ++i) {
      const path = "/image_" + i + ".jpeg";
      const caption =
        "Day qua la mot tam hinh that la dep! Dep xuat sac! ha ha ha ha alibubu a du du du";
      const newImg = new Image({
        path: path,
        userId: testUser._id,
        caption: caption,
      });
      await newImg.save();
    }
    console.log("fake image data success");
  } catch (err) {
    console.log(err.message);
  }
};
