const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "chaitanya",
  database: "vehicle"
});

module.exports = connection;
