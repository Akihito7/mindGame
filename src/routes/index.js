const {Router} = require("express");

const routes = Router();

const authRoutes = require("./authRoutes");
const gameRoutes = require("./mindGameRoutes");

routes.use("/auth", authRoutes);
routes.use("/game", gameRoutes);

module.exports = routes;