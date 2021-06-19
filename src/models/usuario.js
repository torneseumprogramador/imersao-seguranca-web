const db = require("../config/db")

module.exports = class Usuario{
  constructor(){
    this.nome = ""
    this.login = ""
    this.senha = ""
  }

  static login(login, senha){
    return (login === "tornese" && senha === "imersao")
  }

  static async todos(){
    return await db.exec("select nome, login, senha from usuarios order by id desc limit 100")
  }
}