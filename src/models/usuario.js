module.exports = class Usuario{
  constructor(){
    this.nome = ""
    this.login = ""
    this.senha = ""
  }

  static login(login, senha){
    return (login === "tornese" && senha === "imsersao")
  }

  static todos(){
    return [
      {nome: "Danilo", login: "tornese", senha: "imsersao"},
      {nome: "Lana", login: "lana", senha: "imsersao"},
      {nome: "Sheila", login: "sheila", senha: "imsersao"},
    ]
  }
}