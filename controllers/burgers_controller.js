var express = require("express");
var body = require("body-parser");

var routes = express.Router();

var burgers = require("../models/burger.js");

routes.get("/", function(req, res) {
  var data = req.body;
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data,
    };

    res.render("index", hbsObject);
  });
});

routes.post("/index", function(req, res) {
  burgers.create([req.body.burgerType, req.body.devoured], function(result) {
    res.json({ id: result.insertId });
  });
});

routes.put("/index", function(req, res) {
  var condition = req.body.id;

  burgers.update(condition, function(result) {
    if (result.changedRows === 0) {
      return res.status(404);
    }
    res.status(200).send(result);
  });
});

module.exports = routes;
