const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'masterkey',
  database: 'agenda-pet',
});

module.exports = connection;
