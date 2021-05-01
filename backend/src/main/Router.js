const express = require("express");
const cors = require("cors");
const userRouter = require("../route/user.route.js");
const imageRouter = require("../route/image.route.js");

module.exports = ({}) => {
  const router = express.Router();
  router.use(express.static("public"));
  router.use(cors({ exposedHeaders: "auth-token" }));
  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));
  router.use("/auth", userRouter);
  router.use("/", imageRouter);
  return router;
};