const Usuario = require("../models/usuario")

module.exports = {
  index: (req, res) => {
    res.render('usuarios/index', { usuarios: Usuario.todos() });
  }
}