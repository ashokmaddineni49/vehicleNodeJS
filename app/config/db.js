const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "vehiclerentingsystem"
});

module.exports = connection;
