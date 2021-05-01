const express = require("express");
const cors = require("cors");

module.exports = ({ userRouter, imageRouter }) => {
  const router = express.Router();
  router.use(express.static("public"));
  router.use(cors({ exposedHeaders: "auth-token" }));
  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));
  router.use("/auth", userRouter);
  router.use("/", imageRouter);
  return router;
};
