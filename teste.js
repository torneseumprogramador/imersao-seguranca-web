const db = require("./src/config/db")
async function teste(){
  console.log(await db.exec("select * from usuarios"))
}

teste();