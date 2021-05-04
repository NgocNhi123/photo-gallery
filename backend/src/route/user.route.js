const express = require("express");

module.exports = ({ userController, authentication }) => {
  const router = express.Router();
  router.post("/login", userController.login);
  router.post("/register", userController.register);
  router.post(
    "/updatePassword",
    authentication.verify,
    userController.updatePassword
  );

  return router;
};
