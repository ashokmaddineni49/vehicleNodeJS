const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const register = require("./app/controller/register");
const vehicle_subtype = require("./app/controller/vehicle_subtype");
const user = require("./app/controller/user");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

app.use("/register",register);
app.use("/users", user);
app.use("/vehicle", vehicle_subtype);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
