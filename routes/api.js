"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", (req, res) => {
    let initNum = convertHandler.getNum(req.body.test);
    console.log(initNum);
    let unit = convertHandler.getUnit(req.body.test).toLowerCase();
    console.log(unit);
    console.log(convertHandler.spellOutUnit(unit));
    console.log(convertHandler.getReturnUnit(unit));
    console.log(convertHandler.convert(initNum, unit));
    res.send("ok");
  });
};
