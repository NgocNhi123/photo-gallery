const express = require("express");

module.exports = ({ imageController, authentication, fileUploader }) => {
  const router = express.Router();
  router.get("/getAllImgage", authentication.verify, imageController.getAll);
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
    fileUploader.uploadSingle,
    imageController.upload
  );
  return router;
};
