const Usuario = require("../models/usuario")
const Cookie = require("../helpers/cookie")

module.exports = {
  index: async (req, res) => {
    const sucesso = await req.consumeFlash('sucesso');
    res.render('usuarios/index', { usuarios: await Usuario.todos(), sucesso: sucesso });
  },
  novo: async (req, res) => {
    res.render('usuarios/novo', { usuario: new Usuario(), erro: "" });
  },
  editar: async (req, res) => {
    let usuario = (await Usuario.busca(req.params.id))[0]
    res.render('usuarios/atualizar', { usuario: usuario, erro: "" });
  },
  criar: async (req, res) => {
    const {nome, login, senha} = req.body

    let usuario = new Usuario()
    usuario.nome = nome
    usuario.login = login
    usuario.senha = senha
    try{
      await usuario.salvar()
    }
    catch(e){
      res.render('usuarios/novo', { usuario: usuario, erro: e.message });
      return
    }

    await req.flash('sucesso', 'Usuário criado com sucesso!');
    res.redirect('/usuarios');
  },
  update: async (req, res) => {
    const {id} = req.params
    const {nome, login, senha} = req.body

    let usuario = new Usuario()
    usuario.id = id
    usuario.nome = nome
    usuario.login = login
    usuario.senha = senha
    try{
      await usuario.atualizar()
    }
    catch(e){
      res.render('usuarios/atualizar', { usuario: usuario, erro: e.message });
      return
    }

    await req.flash('sucesso', 'Usuário atualizado com sucesso!');
    res.redirect('/usuarios');
  },
  apagar: async (req, res) => {
    const {id} = req.params
    try{
      await Usuario.apagar(id)
    }
    catch(e){
      res.status(400).send({ erro: e.message });
      return
    }
    await req.flash('sucesso', 'Usuário apagado com sucesso!');
    res.redirect('/usuarios');
  },
  indexJson: async (req, res) => {
    let usuarios = await Usuario.todos()
    for(let i=0; i<usuarios.length; i++){
      usuarios[i].senha = undefined
    }

    res.send(usuarios).status(200);
  },
  criarJson: async (req, res) => {
    const {nome, login, senha} = req.body

    let usuario = new Usuario()
    usuario.nome = nome
    usuario.login = login
    usuario.senha = senha
    try{
      await usuario.salvar()
    }
    catch(e){
      res.status(400).send({ erro: e.message });
      return
    }

    res.status(201).send({ sucesso: "Usuário criado com sucesso!" });
  },
  updateJson: async (req, res) => {
    const {id} = req.params
    const {nome, login, senha} = req.body

    let usuario = new Usuario()
    usuario.id = id
    usuario.nome = nome
    usuario.login = login
    usuario.senha = senha
    try{
      await usuario.atualizar()
    }
    catch(e){
      res.status(400).send({ erro: e.message });
      return
    }

    res.status(200).send({ sucesso: "Usuário atualizado com sucesso!" });
  },
  apagarJson: async (req, res) => {
    const {id} = req.params
    try{
      await Usuario.apagar(id)
    }
    catch(e){
      res.status(400).send({ erro: e.message });
      return
    }

    res.status(204).send({});
  },
  usuarioJson: async (req, res) => {
    const {id} = req.params
    let usuario = {}
    try{
      usuario = (await Usuario.busca(id))[0]
      usuario.senha = undefined
    }
    catch(e){
      res.status(404).send({ erro: e.message });
      return
    }

    res.status(200).send(usuario);
  },
}