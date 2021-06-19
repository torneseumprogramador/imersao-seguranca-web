const Usuario = require("../models/usuario")
const Cookie = require("../helpers/cookie")
const Cripto = require('../helpers/cripto')

module.exports = {
  index: async (req, res) => {
    const erros = await req.consumeFlash('erro');
    res.render('login/index', { erros: erros });
  },
  deslogar: async (req, res) => {
    Cookie.remove(res, "usuario")
    res.redirect("/")
  },
  logar: async (req, res) => {
    let usuario = await Usuario.login(req.body.login, req.body.senha);
    if(usuario){
      let string_usuario = JSON.stringify(usuario);
      let validador = Cripto.make(string_usuario);
      Cookie.set(res, "usuario", string_usuario)
      Cookie.set(res, "usuario_validador", validador)
      res.redirect("/usuarios")
    }
    else{
      await req.flash('erro', 'Usuário ou senha inválidos');
      res.redirect("/login")
    }
  }
}