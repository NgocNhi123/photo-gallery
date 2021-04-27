const awilix = require("awilix");
// main
const App = require("./main/App");
const Server = require("./main/Server");
const DatabaseConnection = require("./main/DatabaseConnect");
const Router = require("./main/Router");
// models
const userModel = require("./model/User");
const imageModel = require("./model/Image");
// daos
const imageDaos = require("./daos/image.daos");
const userDaos = require("./daos/user.daos");
// controllers
const userController = require("./controller/user.controller");
const imageController = require("./controller/image.controller");
// service
const loginService = require("./service/user-management/login.service");
const registerService = require("./service/user-management/register.service");
const deleteService = require("./service/image-management/delete.service");
const getAllService = require("./service/image-management/getAll.service");
const setFavoriteService = require("./service/image-management/setFavorite.service");

const Container = awilix.createContainer();

Container.register({
  // main
  app: awilix.asClass(App),
  server: awilix.asClass(Server),
  database: awilix.asValue(DatabaseConnection),
  router: awilix.asFunction(Router),
  // models
  userModel: awilix.asValue(userModel),
  imageModel: awilix.asValue(imageModel),
  // daos
  imageDaos: awilix.asClass(imageDaos),
  userDaos: awilix.asClass(userDaos),
  // controller
  userController: awilix.asClass(userController),
  imageController: awilix.asClass(imageController),
  // service
  loginService: awilix.asClass(loginService),
  registerService: awilix.asClass(registerService),
  deleteService: awilix.asClass(deleteService),
  getAllService: awilix.asClass(getAllService),
  setFavoriteService: awilix.asClass(setFavoriteService),
});

module.exports = Container;