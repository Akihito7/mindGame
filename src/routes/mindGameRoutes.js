const {Router} = require("express");

const verificarToken = require("../middlewares/authentication");

const routes = Router();

routes.use(verificarToken);

routes.get("/", verificarToken, (req,res) => {
res.status(200).json("sim a authenticação deu bom");
});

module.exports = routes;