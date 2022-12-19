const {Router}=require('express');
const { UserController } = require('../controllers/userController');
const {FormBuilderController} = require('./../controllers/formBuilderController');
const service = require('../models/user');
const { ProductController } = require('../controllers/productController');
const { TercerosController } = require('../controllers/tercerosController');
const router=Router();

// angular desarrollo==============>>>>>>>>
router.get("/getTipoTerceros",new TercerosController().getTipoTerceros);
router.get("/getTipoDocumento",new TercerosController().getTipoDocumento);

router.get("/getTipoRegimen",new TercerosController().getTipoRegimen);//http://localhost:3000/getTipoRegimen

router.get("/getMunicipios",new TercerosController().getMunicipios);

router.get("/getDepartamentos",new TercerosController().getDepartamentos);

router.get("/getAllTerceros",new TercerosController().getAllTerceros);
router.post("/createTerceros",new TercerosController().createTerceros);

router.post("/login",new UserController().loginController);



module.exports = router;