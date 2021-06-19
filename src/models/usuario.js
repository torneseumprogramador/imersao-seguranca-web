const db = require("../config/db")
const Cripto = require('../helpers/cripto')

module.exports = class Usuario{
  constructor(){
    this.id = 0
    this.nome = ""
    this.login = ""
    this.senha = ""
  }

  static async login(login){
    let usuarios = await db.exec("select id, nome, login, senha from usuarios where login=?", [login])
    return usuarios[0];
  }

  static async todos(){
    return await db.exec("select id, nome, login, senha from usuarios order by id desc limit 100")
  }

  static async busca(id){
    return await db.exec("select id, nome, login, senha from usuarios where id = ?", [id])
  }

  static async apagar(id){
    return await db.exec("delete from usuarios where id = ?", [id])
  }

  async salvar(){
    if(!this.senha || this.senha == ""){
      throw { message: "Senha obrigatória"}
    }

    this.nome = this.nome.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")

    this.senha = Cripto.make(this.senha)
    try {
      await db.exec(`insert into usuarios(nome, login, senha) values(?, ?, ?)`, [this.nome, this.login, this.senha])
    }
    catch(e){
      if(e.message.indexOf("Duplicate entry") !== -1){
        throw { message: "Login já existe, crie com um login diferente de: " + this.login }
      }
      throw e
    }
  }

  async atualizar(){
    if(!this.senha || this.senha == ""){
      throw { message: "Senha obrigatória"}
    }
    this.nome = this.nome.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    
    this.senha = Cripto.make(this.senha)
    try {
      await db.exec(`update usuarios set nome=?, login=?, senha=? where id = ?`, [this.nome, this.login, this.senha, this.id])
    }
    catch(e){
      if(e.message.indexOf("Duplicate entry") !== -1){
        throw { message: "Login já existe, crie com um login diferente de: " + this.login }
      }
      throw e
    }

  }
}