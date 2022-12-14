const { generateWebToken } = require('../middlewares/jwt');
const bd = require('./../db')
class UserLogic {

  async createUserLogic(user) {
   
    let userSystem = {
    email:user.email,
    password:user.password,
    id_role_type: user.roleType 
}
    let userInto = await bd('user_system').insert(userSystem)
      .then(function (result) {
        console.log("successful", userInto);     // respond back to request
      })
  }

  async getAllUsersLogic() {
    try {

      console.log("here the list forms in backend");
      var users = await bd.raw('select email, role from user_system join role_type AS rT ON rT.id = user_system.id_role_type');
      console.log("here the forms in back query", users[0]);

    } catch (error) {
      console.log(error);
    }
    return users;
  }

  async getUserById(userId) {
    try {
      let array = [];
      array.push(userId);

      console.log("here the list forms in backend", array[0].userId);
      let id = array[0].userId;
      var user = await bd.raw('select u.id,u.firstname,u.surname,u.address,u.email, city.name_city  from user as u join cities as city on cities_id=city.id where u.id=?;', [id]);
      console.log("here the forms in back query", user[0]);
      //  select u.id,u.firstname,u.surname,u.address, city.name_city  from user as u join cities as city on cities_id=city.id;
    } catch (error) {
      console.log(error);
    }
    return user[0];
  }

  async updateUser(user) {
    try {
     
      // var userUpdate = await bd.raw('update user_system ;', [firstname, surname, email, password, address, cities_id, id]);
      let userUpdate = await bd('user_system')
      .where({
       id: user.id,
    })
      .update({
        email : user.email,
        password:user.password,
        id_role_type:user.roleType
      })
    } catch (error) {
      console.log(error);
    }
    return userUpdate;
  }

  async userLogin(login) {
    try {
      console.log("here the login in logic", login);

      var userLogin = await bd.raw('select id,email,password from user where email=?;', [login.email]);
      console.log("here the userLogin", userLogin[0][0]);
      if (userLogin[0][0] === undefined || userLogin[0][0] === null) {
        throw Error('bad request email')
      }

      console.log(typeof (userLogin));
      return userLogin[0][0];
    } catch (error) {
      console.log("here the error in login logic", error);
      throw Error(error);
    }
  }

  async getAllTercerosLogic() {
    try {
      const array = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        'listar'
      ];

      var users = await bd.raw(`call Sp_con_terceros(${array.map((e) => { return "?"; })})`, array);

      // var forms = await bd.select('id, name_form, table_asociated ').table('form');
      //  console.log("her ethe result in response",forms);
      console.log("here the forms in back query", users[0].users);

    } catch (error) {
      console.log(error);
    }
    return users[0][0];
  }

  async InsertTercerosLogic(req, res) {
    try {
      // const insert = req.array
      const array = [
        req.body.id,
        req.body.id_,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        'listar'
      ];

      var users = await bd.raw(`call Sp_con_terceros(${array.map((e) => { return "?"; })})`,);

      // var forms = await bd.select('id, name_form, table_asociated ').table('form');
      //  console.log("her ethe result in response",forms);
      console.log("here the forms in back query", users[0].users);

    } catch (error) {
      console.log(error);
    }
    return users[0][0];
  }

  async getOneUserByEmailLogic(user) {

    try {

      const userResult = await bd.raw(`select  
      id, email,password,id_role_type from user_system
      where email=?;`, [user.email]);

      if (userResult.length === 0 || userResult === undefined){
        console.log(userResult);
        return {message:"user not found"}
      }else{
      if (userResult[0].password !== user.password){
          console.log(userResult);
          return {message:"invalid password"}
        }
        const token = await generateWebToken(userResult[0].id_role_type);
        console.log(token);
        return {
          message: "user Authenticated ",
          token,
          email: userResult[0].email,
          roleType:userResult[0].id_role_type
        };
      }


    } catch (error) {
      return {message:"internal server error"};
    }
  }

  
  async getAllRolesLogic() {
    try {
      console.log("here the list forms in backend");
      var roles = await bd.raw('select * from role_type');
      console.log("here the forms in back query", roles);

    } catch (error) {
      console.log(error);
    }
    return roles;
  }
}

module.exports = { UserLogic }