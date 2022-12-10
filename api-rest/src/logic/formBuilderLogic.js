
const { json } = require('body-parser');
const { response } = require('express');
const bd = require('./../db')
class FormBuilderLogic{

  async createForm(form) {
    // console.log("here the form in backend",form);
    await bd('form').insert(form)
        .then( function (result) {
            console.log("successful",form);     // respond back to request
         })
}

async getAllForms() {
  try {    
    // console.log("here the list forms in backend");
    var forms = await bd.raw('select id,name_form,table_asociated from form;');
    // var forms = await bd.select('id, name_form, table_asociated ').table('form');
        //  console.log("her ethe result in response",forms);
        // console.log("here the forms in back query",forms[0]);

  } catch (error) {
    console.log(error);
  }
  return forms[0];   
}

async getFormById(formId) {
  try {
   let array = [];
   array.push(formId);

    console.log("here the list forms in backend",array[0].formId);
let id=array[0].formId;
    var forms = await bd.raw('select id, name_form, table_asociated,content from form where id=?;',[id]);
    // var forms = await bd.select('id, name_form, table_asociated ').table('form');
        //  console.log("her ethe result in response",forms);
        console.log("here the forms in back query",forms[0]);

  } catch (error) {
    console.log(error);
  }
  return forms[0];   
}

async getFormByName(formName){
  try {
    let array = [];
    array.push(formName);
 
     console.log("here the list forms in backend",array[0].formName);
 let name=array[0].formName;
     var forms = await bd.raw('select id, name_form, table_asociated,content from form where name_form=?;',[array[0].formName]);
     // var forms = await bd.select('id, name_form, table_asociated ').table('form');
         //  console.log("her ethe result in response",forms);
         console.log("here the forms in back query",forms[0]);
 
   } catch (error) {
     console.log(error);
   }
   return forms[0];
}

async updateForm(form) {

  try {
    console.log("here the user in back",form);
    console.log("here the type object",typeof(form));
    let array=[];
    array.push(form);
    console.log("here the array",array);
    const map = array.map((x)=>{
      return{
        content:x.content
      }
    });
    console.log("here the maaaappp",map);
    for(var i =0;i<map.length;i++){
var element=map[i];
    }
    console.log("here the element with content",element.content);
    console.log("here the id in content",element.content.id);
    let parseando = JSON.stringify(element.content);
    console.log("parseandooooo",parseando);

var updateForm = bd('form')
  .where({ id: element.content.id })
  .update({ 
    content: parseando 
  }, ['id', 'content'])
  } catch (error) { 
    console.log("error",error);
  }
return updateForm;
}
}

module.exports={FormBuilderLogic}