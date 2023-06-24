const {Router} = require("express");

const authController = require("../controllers/authController");

const routes = Router();

routes.post("/", authController.cadastrar);

routes.post("/login", authController.login);

module.exports = routes;