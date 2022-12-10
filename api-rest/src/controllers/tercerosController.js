const { TercerosLogic } = require("../logic/tercerosLogic");

class TercerosController{


    async getTipoTerceros(req,res){
        try {
             var types = await new TercerosLogic().getTipoTercero(req);
            console.log("here the users in the controller",types);
        } catch (error) {
            console.log("here the error in the get all users",error);
        }
        return res.json(types);
    }

    async getTipoDocumento(req,res){
        try {
             var types = await new TercerosLogic().getTipoDocumento(req);
            console.log("here the users in the controller",types);
        } catch (error) {
            console.log("here the error in the get all users",error);
        }
        return res.json(types);
    }

    async getTipoRegimen(req,res){
        try {
            var types = await new TercerosLogic().getTipoRegimen(req);
           console.log("here the users in the controller",types);
       } catch (error) {
           console.log("here the error in the get all users",error);
       }
       return res.json(types);
    }

    async getMunicipios(req,res){
        try {
            var municipios = await new TercerosLogic().getMunicipios(req);
           console.log("here the users in the controller",municipios);
       } catch (error) {
           console.log("here the error in the get all users",error);
       }
       return res.json(municipios);
    }

    async getDepartamentos(req,res){
        try {
            var municipios = await new TercerosLogic().getDepartamentos(req);
           console.log("here the users in the controller",municipios);
       } catch (error) {
           console.log("here the error in the get all users",error);
       }
       return res.json(municipios);
    }

    async getActividadesCiiu(req,res){
        try {
            var actividades= await new TercerosLogic().getActividadesCiiu(req);
           console.log("here the users in the controller",actividades);
       } catch (error) {
           console.log("here the error in the get all users",error);
       }
       return res.json(actividades);
    }

    async getTipoFormaDePago(req,res){
        try {
            var formaDePago= await new TercerosLogic().getTipoFormaDePago(req);
           console.log("here the users in the controller",formaDePago);
       } catch (error) {
           console.log("here the error in the get all users",error);
       }
       return res.json(formaDePago);
    }
    async getAllTerceros(req,res){
        try {
            var terceros = await new TercerosLogic().getAllTercerosLogic(req);
            console.log("here the users in the controller",terceros);
        } catch (error) {
            console.log("here the error in the get all users",error);
        }
        return res.json({terceros});//"successful request"
        // await bd.raw('insert into user (firstname,surname,email,password,cities_id) values($0,$1,$2,$3,$4);',[user.firstname,user.surname,user.email,user.password,user.cities_id]);
        // knex('user').insert({email: user.email,})
        //
    }

    async getAllTercerosForList(req,res){
        try {
            var terceros = await new TercerosLogic().getAllTercerosForListLogic(req);
            console.log("here the users in the controller",terceros);
        } catch (error) {
            console.log("here the error in the get all users",error);
        }
        return res.json({terceros});//"successful request"
        // await bd.raw('insert into user (firstname,surname,email,password,cities_id) values($0,$1,$2,$3,$4);',[user.firstname,user.surname,user.email,user.password,user.cities_id]);
        // knex('user').insert({email: user.email,})
        //
    }
    
    async getOneTercerosForLogic(req,res){
        try {
            var terceros = await new TercerosLogic().getOneTercerosForLogic(req.body);
            console.log("here the users in the controller",terceros);
        } catch (error) {
            console.log("here the error in the get all users",error);
        }
        return res.json({terceros});//"successful request"
        // await bd.raw('insert into user (firstname,surname,email,password,cities_id) values($0,$1,$2,$3,$4);',[user.firstname,user.surname,user.email,user.password,user.cities_id]);
        // knex('user').insert({email: user.email,})
        //
    }

        
    async getOneTerceros(req,res){
        try {
            var terceros = await new TercerosLogic().getOneTercerosLogic(req.body);
            console.log("here the users in the controller",terceros);
        } catch (error) {
            console.log("here the error in the get all users",error);
        }
        return res.json({terceros});//"successful request"
        // await bd.raw('insert into user (firstname,surname,email,password,cities_id) values($0,$1,$2,$3,$4);',[user.firstname,user.surname,user.email,user.password,user.cities_id]);
        // knex('user').insert({email: user.email,})
        //
    }
    
    async createTerceros(req,res){
        try {
            
            let terceros = await new TercerosLogic().createTerceros(req.body);
        } catch (error) {
            console.log(error);
        }
        return res.json({message:"successful request"})//"successful request"
        // await bd.raw('insert into user (firstname,surname,email,password,cities_id) values($0,$1,$2,$3,$4);',[user.firstname,user.surname,user.email,user.password,user.cities_id]);
        // knex('user').insert({email: user.email,})
        //
    }

       
    async updateTerceros(req,res){
        try {
            
            let terceros = await new TercerosLogic().updateTerceros(req.body);
        } catch (error) {
            console.log(error);
        }
        return res.json({message:"successful request"})//"successful request"
        // await bd.raw('insert into user (firstname,surname,email,password,cities_id) values($0,$1,$2,$3,$4);',[user.firstname,user.surname,user.email,user.password,user.cities_id]);
        // knex('user').insert({email: user.email,})
        //
    }

       
    async deleteTerceros(req,res){
        try {
            
            let terceros = await new TercerosLogic().deleteTerceros(req.body);
        } catch (error) {
            console.log(error);
        }
        return res.json({message:"successful request"})//"successful request"
        // await bd.raw('insert into user (firstname,surname,email,password,cities_id) values($0,$1,$2,$3,$4);',[user.firstname,user.surname,user.email,user.password,user.cities_id]);
        // knex('user').insert({email: user.email,})
        //
    }
}


module.exports = { TercerosController };