const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", function (req, res) {
    
    User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      else res.send(data);
    });
});

module.exports = router;