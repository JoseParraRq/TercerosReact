const {FormBuilderLogic} = require('./../logic/formBuilderLogic');

class FormBuilderController{
    
    
    async createForm(req,res){
        try {
            
            let formInto = await new FormBuilderLogic().createForm(req.body);
        } catch (error) {
            console.log(error);
        }
        return res.json({message:"successful request"})//"successful request"
        // await bd.raw('insert into user (firstname,surname,email,password,cities_id) values($0,$1,$2,$3,$4);',[user.firstname,user.surname,user.email,user.password,user.cities_id]);
        // knex('user').insert({email: user.email,})
        
    }

    async getAllForms(req,res){
        try {
            var forms = await new FormBuilderLogic().getAllForms();
            // console.log("her ethe forms in the controller",forms);
        } catch (error) {
            console.log("here the error in the get all forms",error);
        }
        return res.json({forms});
    }

    async getFormById(req,res){
        try {
            var form = await new FormBuilderLogic().getFormById(req.body);
            // console.log("her ethe forms in the controller",form);
        } catch (error) {
            console.log("here the error in the get all forms",error);
        }
        return res.json({form});
    }

    async getFormByName(req,res){
        try {
            var formName = await new FormBuilderLogic().getFormByName(req.body);
            // console.log("her ethe forms in the controller",formName);
        } catch (error) {
            console.log("here the error in the get all forms",error);
        }
        return res.json({formName});
    }
    /* async function getall(){
        let a = await bd.raw('insert into user;');
        console.log(a[0]);
    }
    console.log(getall()); */
    //const insert = () => bd.
    async updateForm(req,res){
        try {
            
            let updateForm = await new FormBuilderLogic().updateForm(req.body);
        } catch (error) {
            console.log(error);
        }
        return res.json({message:"successful request"})//"successful request"
        
    }

}

module.exports = {FormBuilderController};