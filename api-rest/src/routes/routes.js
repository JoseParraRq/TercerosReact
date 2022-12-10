const {Router}=require('express');
const { UserController } = require('../controllers/userController');
const {FormBuilderController} = require('./../controllers/formBuilderController');
const service = require('../models/user');
const { ProductController } = require('../controllers/productController');
const { TercerosController } = require('../controllers/tercerosController');
const router=Router();


const list = (req,res)=>service
.list()
.then((response) => res.json(response))
.catch((e) => res.json({e}));


router.get("/",(req,res)=>{
    console.log("here the peticion");
    res.send("aprendiendo knex")
})

//router.get("/all",list);

// angular desarrollo==============>>>>>>>>
router.get("/getTipoTerceros",new TercerosController().getTipoTerceros);
// router.get("/getActividadesCiiu",new TercerosController().getActividadesCiiu);
router.get("/getTipoDocumento",new TercerosController().getTipoDocumento);
router.get("/getTipoRegimen",new TercerosController().getTipoRegimen);//http://localhost:3000/getTipoRegimen
router.get("/getMunicipios",new TercerosController().getMunicipios);
router.get("/getDepartamentos",new TercerosController().getDepartamentos);
// router.get("/getTipoFormaDePago",new TercerosController().getTipoFormaDePago);

router.get("/getAllTerceros",new TercerosController().getAllTerceros);

// router.get("/getAllTercerosForList",new TercerosController().getAllTercerosForList);
// router.post("/getOneTercerosForDetail",new TercerosController().getOneTercerosForLogic);
// router.post("/getOneTerceros",new TercerosController().getOneTerceros);
// router.put("/updateTerceros",new TercerosController().updateTerceros)
router.post("/createTerceros",new TercerosController().createTerceros);

// router.post("/createForm",new FormBuilderController().createForm);
// router.post("/deleteTerceros", new TercerosController().deleteTerceros)
// // fin desarrollo

// // angular test form =========================>>>>>>>>>>>>>>>>>>>>>>
// router.post("/login",new UserController().userLogin);

// router.post("/createForm",new FormBuilderController().createForm);

// router.get("/getAllForms",new FormBuilderController().getAllForms);

// router.post("/getFormById",new FormBuilderController().getFormById);

// router.post("/getFormByName",new FormBuilderController().getFormByName);

// router.put("/updateForm",new FormBuilderController().updateForm);

// router.post("/createUser",new UserController().createUser);

// router.get("/getAllUsers",new UserController().getAllUsers);

// router.post("/getUserById",new UserController().getUserById);

// router.put("/updateUser",new UserController().updateUser);

// router.post("/createProduct",new ProductController().createProduct);

// router.get("/getAllProducts",new ProductController().getAllProducts);

// router.post("/getProductById",new ProductController().getProductById);

// router.put("/updateProduct",new ProductController().updateProduct);


module.exports = router;