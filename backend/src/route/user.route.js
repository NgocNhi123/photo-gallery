const express = require("express");

module.exports = ({ userController }) => {
  const router = express.Router();
  router.post("/login", userController.login);
  router.post("/register", userController.register);

  return router;
};