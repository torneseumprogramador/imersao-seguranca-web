const Usuario = require("../models/usuario")

module.exports = {
  index: async (req, res) => {
    res.render('usuarios/index', { usuarios: await Usuario.todos() });
  },
  indexJson: async (req, res) => {
    res.send(await Usuario.todos()).status(200);
  },
  novo: async (req, res) => {
    res.render('usuarios/novo', { usuario: new Usuario() });
  },
}