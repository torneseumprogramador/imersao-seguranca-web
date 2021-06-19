if(process.env.NODE_ENV !== "production"){
  require('dotenv').config()
}

const mysql = require('mysql2');
const util = require('util');

const db = {};
db.exec = async (sql, values) => {
  const conn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT,
  });
  
  const query = util.promisify(conn.query).bind(conn);
  try {
    const rows = await query(sql, values);
    return rows;
  }
  catch(e){
    throw e
    //console.log(e)
    // return []
  } finally {
    conn.end();
  }
};

module.exports = db