const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/", function (req, res) {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    }
    const user = new User({
        fname: req.body.fname,
        lname: req.body.lname, 
        email: req.body.email,
        password: req.body.password,
        licenseId: req.body.licenseId
      });
    
      // Save User in the database
      User.create(user, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        else res.send(data);
      });
});

module.exports = router;