const conn = require("../config/db");

const User = function(user) {
    const {fname, lname, email, password, licenseId} = user;

    this.firstname = fname;
    this.lastname = lname;
    this.email = email;
    this.pass_word = password;
    this.liscence_id = licenseId;
}

User.create = (newUser, result) => {
    conn.query("INSERT INTO user_details SET ?", newUser, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log("created user: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
      });

}

User.getAll = (result) => {
  let query = "SELECT * FROM user_details";
    conn.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
}

module.exports = User;