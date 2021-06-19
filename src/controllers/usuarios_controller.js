const Usuario = require("../models/usuario")

module.exports = {
  index: async (req, res) => {
    res.render('usuarios/index', { usuarios: await Usuario.todos() });
  }
}