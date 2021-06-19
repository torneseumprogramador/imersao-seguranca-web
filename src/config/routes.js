const express = require('express');
const router = express.Router();
const LoginMiddleware = require("../middleware/login");

const HomeController = require("../controllers/home_controller")
const UsuariosController = require("../controllers/usuarios_controller")
const LoginController = require("../controllers/login_controller")

router.get('/', LoginMiddleware, HomeController.index);
router.get('/sobre', HomeController.sobre);

router.get('/usuarios', LoginMiddleware, UsuariosController.index);
router.get('/usuarios/novo', LoginMiddleware, UsuariosController.novo);
router.post('/usuarios/criar', LoginMiddleware, UsuariosController.criar);
router.get('/usuarios/:id', LoginMiddleware, UsuariosController.editar);
router.post('/usuarios/:id', LoginMiddleware, UsuariosController.update);
router.get('/usuarios/:id/delete', LoginMiddleware, UsuariosController.apagar);

var Recaptcha = require('express-recaptcha').RecaptchaV3;
var recaptcha = new Recaptcha(process.env.RECPTCHA_KEY, process.env.RECPTCHA_PASS, {callback:'cb'});

router.get('/login', recaptcha.middleware.render, LoginController.index);
router.post('/logar', recaptcha.middleware.verify, LoginController.logar);
router.get('/sair', LoginController.deslogar);

router.get('/usuarios.json', UsuariosController.indexJson);
router.post('/usuarios/criar.json', UsuariosController.criarJson);
router.get('/usuarios/:id.json', UsuariosController.usuarioJson);
router.put('/usuarios/:id.json', UsuariosController.updateJson);
router.delete('/usuarios/:id.json', UsuariosController.apagarJson);


module.exports = router;