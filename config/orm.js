var connection = require("../config/config.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      //console.log(result);
      cb(result);
    });
  },

  create: function(tableInput, burgerType, cb) {
    //var queryString= "INSERT INTO " + tableInput + " SET " + burgerType + ";"
    var queryString = "INSERT INTO " + tableInput + " SET ?";

    connection.query(
      queryString,
      {
        burger: burgerType[0],
        devoured: burgerType[1],
      },
      function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      }
    );
  },

  update: function(tableInput, id, cb) {
    var queryString = "UPDATE " + tableInput + " SET ? WHERE ?;";
    connection.query(queryString, [{ devoured: true }, { ID: id }], function(
      err,
      result
    ) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
