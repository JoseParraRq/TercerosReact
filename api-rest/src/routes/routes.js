const {Router}=require('express');
const { UserController } = require('../controllers/userController');
const {FormBuilderController} = require('./../controllers/formBuilderController');
const service = require('../models/user');
const { ProductController } = require('../controllers/productController');
const { TercerosController } = require('../controllers/tercerosController');
const router=Router();


router.get("/getTipoTerceros",new TercerosController().getTipoTerceros);

router.get("/getTipoDocumento",new TercerosController().getTipoDocumento);

router.get("/getTipoRegimen",new TercerosController().getTipoRegimen);//http://localhost:3000/getTipoRegimen

router.get("/getMunicipios",new TercerosController().getMunicipios);

router.get("/getDepartamentos",new TercerosController().getDepartamentos);

router.get("/getAllTerceros",new TercerosController().getAllTerceros);

router.post("/getOneTercero",new TercerosController().getOneTerceros);

router.post("/getOneTerceroByEmail",new TercerosController().getOneTerceroByEmail);

router.post("/login",new TercerosController().loginController);

// router.put("/updateTerceros",new TercerosController().updateTerceros)

router.post("/createTerceros",new TercerosController().createTerceros);

// // fin desarrollo

// // angular test form =========================>>>>>>>>>>>>>>>>>>>>>>

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