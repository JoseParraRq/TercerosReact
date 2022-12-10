const bd = require('./../db')
class UserLogic{

  async createUserLogic(user) {
    await bd('user').insert(user)
        .then( function (result) {
            console.log("successful",user);     // respond back to request
         })
}

async getAllUsersLogic() {
  try {
    
    console.log("here the list forms in backend");
    var users = await bd.raw('select u.id,u.firstname,u.surname,u.address, city.name_city  from user as u join cities as city on cities_id=city.id;');
    // var forms = await bd.select('id, name_form, table_asociated ').table('form');
        //  console.log("her ethe result in response",forms);
        console.log("here the forms in back query",users[0]);

  } catch (error) {
    console.log(error);
  }
  return users[0]; 
}

async getUserById(userId){
  try {
    let array = [];
    array.push(userId);
 
     console.log("here the list forms in backend",array[0].userId);
 let id=array[0].userId;
     var user = await bd.raw('select u.id,u.firstname,u.surname,u.address,u.email, city.name_city  from user as u join cities as city on cities_id=city.id where u.id=?;',[id]);

    //  var user = await bd.raw('select id,firstname,surname,address,email,password,address,cities_id  from user where id=?;',[id]);
     // var forms = await bd.select('id, name_form, table_asociated ').table('form');
         //  console.log("her ethe result in response",forms);
         console.log("here the forms in back query",user[0]);
//  select u.id,u.firstname,u.surname,u.address, city.name_city  from user as u join cities as city on cities_id=city.id;
   } catch (error) {
     console.log(error);
   }
   return user[0];   
}

async updateUser(user){
  try {
    let array = [];
    array.push(user);
 console.log("her ethe user in back",user);
     console.log("here the list forms in backend",array[0].userId);
 let id=array[0].userId;
 let firstname=array[0].firstname;
 let surname=array[0].surname;
 let email=array[0].email;
 let password=array[0].password;
 let cities_id=array[0].cities_id;
 let address=array[0].address;

     var userUpdate = await bd.raw('update user set firstname=?,surname=?,email=?,password=?,address=?,cities_id=? where id=?;',[firstname,surname,email,password,address,cities_id,id]);
        
    } catch (error) {
     console.log(error);
   }
   return userUpdate;   
}

async userLogin(login){
try {
  console.log("here the login in logic",login);
     
  var userLogin = await bd.raw('select id,email,password from user where email=?;',[login.email]);
     console.log("here the userLogin",userLogin[0][0]);
     if(userLogin[0][0]===undefined || userLogin[0][0]===null){
      throw Error('bad request email')
    }

    console.log(typeof(userLogin));
    return userLogin[0][0];
} catch (error) { 
  console.log("here the error in login logic",error);
  throw Error(error);
}
}

async getAllTercerosLogic(){
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

    var users = await bd.raw(`call Sp_con_terceros(${array.map((e) => { return "?"; })})`,array);

    // var forms = await bd.select('id, name_form, table_asociated ').table('form');
        //  console.log("her ethe result in response",forms);
        console.log("here the forms in back query",users[0].users);

  } catch (error) {
    console.log(error);
  }
  return users[0][0]; 
}

async InsertTercerosLogic(req,res){
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
        console.log("here the forms in back query",users[0].users);

  } catch (error) {
    console.log(error);
  }
  return users[0][0]; 
}


}

module.exports={UserLogic}