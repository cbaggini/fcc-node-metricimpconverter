"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", (req, res) => {
    console.log(convertHandler.getNum(req.body.test));
    let unit = convertHandler.getUnit(req.body.test).toLowerCase();
    console.log(unit);
    console.log(convertHandler.spellOutUnit(unit));
    console.log(convertHandler.getReturnUnit(unit));
    res.send("ok");
  });
};
