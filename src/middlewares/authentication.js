const { verify } = require("jsonwebtoken");
const auth = require("../configs/auth");

function verificarToken(request,response, next){

    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.json("Token inexistente ou inválido");
    }

    const [,token] = authHeader.split(" ");

    try {
        verify(token, auth.jwt.secret);

        next();

    } catch (error) {
       return response.json("token inexistente ou inválido");
    }

}

module.exports = verificarToken;