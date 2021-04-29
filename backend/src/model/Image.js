const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  path: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: new Date().toString().substring(0, 21),
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  deletedAt: {
    type: String,
    default: null,
  },
  caption: {
    type: String,
    default: "",
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Image", ImageSchema);
