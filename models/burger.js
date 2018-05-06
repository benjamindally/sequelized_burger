var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  create: function(burgerType, cb) {
    var burgerType = burgerType;
    orm.create("burgers", burgerType, function(result) {
      cb(result);
    });
  },

  update: function(condition, cb) {
    var condition = condition;
    orm.update("burgers", condition, function(res) {
      cb(res);
    });
  },
};

module.exports = burgers;
