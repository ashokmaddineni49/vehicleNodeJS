const conn = require("../config/db");

const VehicleDetails = function() {
    
}

VehicleDetails.getAll = (subtype, result) => {
    let query = "SELECT * FROM vehicle_details";
    if (subtype) {
        query += ` WHERE vehicle_category='${subtype}'`;
      }
    conn.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });

}

module.exports = VehicleDetails;