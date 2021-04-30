const express = require("express");

module.exports = ({ imageController }) => {
  const router = express.Router();
  router.get("/getAllImg", imageController.getAll);
  router.post("/setFavorite", imageController.setFavorite);
  router.post("/delete", imageController.delete);
  router.post("/upload", imageController.upload);
  return router;
};