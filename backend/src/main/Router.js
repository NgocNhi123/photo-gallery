const express = require("express");
const cors = require("cors");

<<<<<<< HEAD
module.exports = ({ userRouter, imageRouter }) => {
=======
module.exports = ({ imageRouter, userRouter }) => {
>>>>>>> fe6470288548b16f78c2d2f3b895df4cbfe4a690
  const router = express.Router();
  router.use(express.static("public"));
  router.use(cors({ exposedHeaders: "auth-token" }));
  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));
  router.use("/auth", userRouter);
  router.use("/", imageRouter);
  return router;
};
