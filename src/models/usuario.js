const db = require("../config/db")

module.exports = class Usuario{
  constructor(){
    this.id = 0
    this.nome = ""
    this.login = ""
    this.senha = ""
  }

  static login(login, senha){
    return (login === "tornese" && senha === "imersao")
  }

  static async todos(){
    return await db.exec("select id, nome, login, senha from usuarios order by id desc limit 100")
  }

  static async busca(id){
    return await db.exec("select id, nome, login, senha from usuarios where id = " + id)
  }

  static async apagar(id){
    return await db.exec("delete from usuarios where id = " + id)
  }

  async salvar(){
    try {
      await db.exec(`insert into usuarios(nome, login, senha) values('${this.nome}', '${this.login}', '${this.senha}')`)
    }
    catch(e){
      if(e.message.indexOf("Duplicate entry") !== -1){
        throw { message: "Login já existe, crie com um login diferente de: " + this.login }
      }
      throw e
    }
  }

  async atualizar(){
    try {
      await db.exec(`update usuarios set nome='${this.nome}', login='${this.login}', senha='${this.senha}' where id = ${this.id}`)
    }
    catch(e){
      if(e.message.indexOf("Duplicate entry") !== -1){
        throw { message: "Login já existe, crie com um login diferente de: " + this.login }
      }
      throw e
    }

  }
}