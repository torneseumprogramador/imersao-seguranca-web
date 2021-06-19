const express = require('express');
const router = express.Router();

const HomeController = require("../controllers/home_controller")
const UsuariosController = require("../controllers/usuarios_controller")

router.get('/', HomeController.index);
router.get('/sobre', HomeController.sobre);

router.get('/usuarios', UsuariosController.index);
router.get('/usuarios/novo', UsuariosController.novo);
router.post('/usuarios/criar', UsuariosController.criar);
router.get('/usuarios/:id', UsuariosController.editar);
router.post('/usuarios/:id', UsuariosController.update);
router.get('/usuarios/:id/delete', UsuariosController.apagar);

router.get('/usuarios.json', UsuariosController.indexJson);
router.post('/usuarios/criar.json', UsuariosController.criarJson);
router.get('/usuarios/:id.json', UsuariosController.usuarioJson);
router.put('/usuarios/:id.json', UsuariosController.updateJson);
router.delete('/usuarios/:id.json', UsuariosController.apagarJson);


module.exports = router;