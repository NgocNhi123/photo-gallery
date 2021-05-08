const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../../public/`);
  },
  filename: (req, file, cb) => {
    req.newFileName = new Date().toISOString() + file.originalname;
    cb(null, req.newFileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  }
  cb(null, false);
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000 },
  fileFilter: fileFilter,
});

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
