const knex = require("../database/knex");
const {hash,compare} = require("bcrypt");
const {sign} = require("jsonwebtoken");
const auth = require("../configs/auth");

class authController{

    static async login(request , response){

        const {email,password} = request.body;
        
        try {
            const infoUser = await knex("users").where({email}).first();
            
            const verificarSenha = await compare(password, infoUser.password);
            
            if(!verificarSenha){
                return response.status(403).json("Email ou senhas inválidos");
            }
            const {secret, expiresIn} = auth.jwt;
            const token = sign({},secret, {
                expiresIn
            })
    
                return response.status(200).json({infoUser,token});

        } catch (error) {

            return response.status(404).json("usúario não encontrado");
        }
        

    }

    static async cadastrar(request , response){

        let {email,username,password,firstName,lastName,aboutMe,birthday,favoriteGame,gender} = request.body;

        password = await hash(password, 8);

        const checkEmail = await knex("users").where({email}).first();

        if(checkEmail) return response.status(400).json("Email já em uso");

        const checkName = await knex("users").where({username}).first();

        if(checkName) return response.status(400).json("username já em uso");

        const infoUser =  {email,username,firstName,lastName,aboutMe,birthday,favoriteGame,gender,password};

        await knex("users").insert(infoUser);

        console.log("chegui aqui no final")

        response.status(200).json("");
    }
}

module.exports = authController;