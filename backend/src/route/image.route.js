const express = require("express");
const multer = require("multer");
const upload = multer();

module.exports = ({ imageController, authentication, fileUploader }) => {
  const router = express.Router();
  router.get("/getAllImage", authentication.verify, imageController.getAll);
  router.get(
    "/getAllFavorite",
    authentication.verify,
    imageController.getAllFavorite
  );
  router.post(
    "/setFavorite",
    authentication.verify,
    imageController.setFavorite
  );
  router.post("/delete", authentication.verify, imageController.delete);
  router.post(
    "/upload",
    authentication.verify,
    upload.single("file"),
    imageController.upload
  );
  return router;
};
