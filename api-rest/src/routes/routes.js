const {Router}=require('express');
const { UserController } = require('../controllers/userController');
const {FormBuilderController} = require('./../controllers/formBuilderController');
const service = require('../models/user');
const { ProductController } = require('../controllers/productController');
const { TercerosController } = require('../controllers/tercerosController');
const { validateJwt } = require('../middlewares/validateWebToken');

const router=Router();

// TERCEROS
router.get("/getTipoTerceros",new TercerosController().getTipoTerceros);

router.get("/getTipoDocumento",new TercerosController().getTipoDocumento);

router.get("/getTipoRegimen",new TercerosController().getTipoRegimen);//http://localhost:3000/getTipoRegimen

router.get("/getMunicipios",new TercerosController().getMunicipios);

router.get("/getDepartamentos",new TercerosController().getDepartamentos);

router.get("/getAllTerceros", validateJwt,new TercerosController().getAllTerceros);

router.post("/createTerceros",new TercerosController().createTerceros);

router.post("/login",new UserController().loginController);

// FIN DE TERCEROS

// USERS

router.post("/createUser",validateJwt,new UserController().createUser);

router.get("/getAllUser",validateJwt,new UserController().getAllUsers);

router.get("/getAllRoles",validateJwt, new UserController().getAllRoles)
module.exports = router;