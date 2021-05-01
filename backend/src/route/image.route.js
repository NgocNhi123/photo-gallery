const express = require("express");

module.exports = ({ imageController }) => {
  const router = express.Router();
  router.get("/getAllImgage", imageController.getAll);
  router.get("/getAllFavorite", imageController.getAllFavorite);
  router.post("/setFavorite", imageController.setFavorite);
  router.post("/delete", imageController.delete);
  router.post("/upload", imageController.upload);
  return router;
};
