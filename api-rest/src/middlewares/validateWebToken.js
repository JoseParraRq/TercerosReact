const {response} = require("express");

const jwt = require("jsonwebtoken");

const validateJwt = (req,res = response, next) => {
    const token = req.header("x-token");
    if(!token) return res.status(400).json({message:"unauthorized user"})
    try {
        const payload = jwt.verify(token,process.env.TOKEN);
        req.id = payload.id;
        req.name = payload.name;
        
    } catch (error) {
        return res.status(400).json({message:"Token no valido"})
    }
    next();
}

module.exports = {validateJwt};