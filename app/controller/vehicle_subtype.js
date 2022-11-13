const express = require("express");
const router = express.Router();
const Subtype = require("../models/vehicle_subtype");
const VehicleDetails = require("../models/vehicle_details");

router.get("/subtypes", function (req, res) {
    
    
    const type = req.query.type;

    Subtype.getAll(type, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving vehicle subtypes."
        });
      else res.send(data);
    });
});

router.get("/list", function (req, res) {
    
    
  const subtype = req.query.subtype;

  VehicleDetails.getAll(subtype, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving vehicle details."
      });
    else res.send(data);
  });
});

module.exports = router;