const express = require("express");

module.exports = ({ imageController }) => {
  const router = express.Router();
  router.post("/getAllImg", imageController.getAll);
  router.post("/setFavorite", imageController.setFavorite);
  router.post("/delete", imageController.delete);
  return router;
};
