const Usuario = require("../models/usuario")
const Cookie = require("../helpers/cookie")
const Cripto = require('../helpers/cripto')

module.exports = {
  index: async (req, res) => {
    const erros = await req.consumeFlash('erro');
    res.render('login/index', { erros: erros, captcha: res.recaptcha });
  },
  deslogar: async (req, res) => {
    Cookie.remove(res, "usuario")
    res.redirect("/")
  },
  logar: async (req, res) => {
    if (req.recaptcha.error) {
      await req.flash('erro', 'Captcha inválido');
      return res.redirect("/login")
    }

    let usuario = await Usuario.login(req.body.login);
    if(usuario){
      let valido = Cripto.compare(req.body.senha, usuario.senha);
      if(valido){
        let string_usuario = JSON.stringify(usuario);
        let validador = Cripto.make(string_usuario);
        Cookie.set(res, "usuario", string_usuario)
        Cookie.set(res, "usuario_validador", validador)
        return res.redirect("/usuarios")
      }
    }
    await req.flash('erro', 'Usuário ou senha inválidos');
    res.redirect("/login")
  }
}