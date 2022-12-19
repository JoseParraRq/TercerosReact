const jwt = require("jsonwebtoken");

const generateWebToken = (id) => {
    console.log("======>>",id);
    return new Promise((resolve, reject) => {
        const payload = {
            id
        }
        console.log("tokeeennn",process.env.TOKEN);
        jwt.sign(payload, process.env.TOKEN, 
            { expiresIn: "2h" }, ((err, token) => 
            
            {
                console.log(err,token);
                 if (err)
                 { reject("error del servidor!!!!!") }
                 resolve(token) }));
    })
}
module.exports = {generateWebToken}