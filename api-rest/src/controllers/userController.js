const {UserLogic} = require('./../logic/userLogic');

class UserController{
    
    
    async createUser(req,res){
        try {
            
            let user={
                "firstname":req.body.firstname,
                "surname":req.body.surname,
                "email":req.body.email,
                "password":req.body.password,
                "cities_id":req.body.cities_id,
                "address":req.body.address
            }
            let userinto = await new UserLogic().createUserLogic(user);
        } catch (error) {
            console.log(error);
        }
        return res.json({message:"successful request"})//"successful request"
        // await bd.raw('insert into user (firstname,surname,email,password,cities_id) values($0,$1,$2,$3,$4);',[user.firstname,user.surname,user.email,user.password,user.cities_id]);
        // knex('user').insert({email: user.email,})
        //
    }

    async getAllUsers(req,res){
        try {
            var users = await new UserLogic().getAllUsersLogic();
            console.log("here the users in the controller",users);
        } catch (error) {
            console.log("here the error in the get all users",error);
        }
        return res.json({users});//"successful request"
        // await bd.raw('insert into user (firstname,surname,email,password,cities_id) values($0,$1,$2,$3,$4);',[user.firstname,user.surname,user.email,user.password,user.cities_id]);
        // knex('user').insert({email: user.email,})
        //
    }

   async getUserById(req,res){
        try {
            var user = await new UserLogic().getUserById(req.body);
            console.log("her ethe forms in the controller",user);
        } catch (error) {
            console.log("here the error in the get all forms",error);
        }
        return res.json({user});
    }
  
    async updateUser(req,res){
        try {
            var userUpdate = await new UserLogic().updateUser(req.body);
            console.log("her ethe forms in the controller",userUpdate);
        } catch (error) {
            console.log("here the error in the get all forms",error);
        }
        return res.json({userUpdate});
    }
  
    async userLogin(req,res){
try {
    var login = await new UserLogic().userLogin(req.body);
    console.log("here the login",login);
} catch (error) {
    console.log("here the error in login",login);
}
    return res.json({login});
    }

    async getUserByEmail(req,res){
        try {
            var data = await new UserLogic().getUserByEmail(req.body);
        } catch (error) {
            console.log("here the error in get User By Email",error);
        }
        return res.json({data:"request Successful"});;
    }

    async getAllTerceros(req,res){
        try {
            var users = await new UserLogic().getAllTercerosLogic();
            console.log("here the users in the controller",users);
        } catch (error) {
            console.log("here the error in the get all users",error);
        }
        return res.json({users});//"successful request"
        // await bd.raw('insert into user (firstname,surname,email,password,cities_id) values($0,$1,$2,$3,$4);',[user.firstname,user.surname,user.email,user.password,user.cities_id]);
        // knex('user').insert({email: user.email,})
        //
    }
}


module.exports = { UserController };