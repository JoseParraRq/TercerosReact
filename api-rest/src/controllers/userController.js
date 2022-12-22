const {UserLogic} = require('./../logic/userLogic');

class UserController{
    
    
    async createUser(req,res){
        try {
            
            let userinto = await new UserLogic().createUserLogic(req.body);
        } catch (error) {
            console.log(error);
        }
        return res.json({message:"successful request"})//"successful request"
      
    }

    async getAllUsers(req,res){
        try {
            var users = await new UserLogic().getAllUsersLogic();
            console.log("here the users in the controller",users);
        } catch (error) {
            console.log("here the error in the get all users",error);
        }
        return res.json(users);//"successful request"
        
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
        return res.json(userUpdate);
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
        
    }

    async loginController(req, res) {
        const response = await new UserLogic().getOneUserByEmailLogic(req.body);
        const {message,token,email,roleType} = response; 
        console.log(message); 

        switch (message) {
            case "user not found":
            return res.status(400).json({message})                
            
            break;

            case "user Authenticated ":
                return res.status(200).json({token,email,roleType})                
            break;

            case "internal server error":
                return res.status(500).json({message})                
            break;

            case "invalid password":
                return res.status(400).json({message})                
            break;
       
        default:
            break;
       }
       
    }

    async getAllRoles(req,res){
        try {
            var roles = await new UserLogic().getAllRolesLogic();
            console.log("here the users in the controller",roles);
        } catch (error) {
            console.log("here the error in the get all users",error);
        }
        return res.json(roles);//"successful request"
        
    }
}


module.exports = { UserController };