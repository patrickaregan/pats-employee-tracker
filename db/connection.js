const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'patrick',
  // Your MySQL password
  password: 'patrick',
  database: 'pats_db'
});

module.exports = db;
