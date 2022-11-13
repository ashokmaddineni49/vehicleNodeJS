const conn = require("../config/db");

const Subtype = function() {
    // const {id, subtype, type,} = sub_type;
    // this.id = id;
    // this.subtype = subtype;
    // this.type = type;
}

Subtype.getAll = (type, result) => {
    let query = "SELECT * FROM vehicle_subtype";
    if (type) {
        query += ` WHERE type='${type}'`;
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

module.exports = Subtype;