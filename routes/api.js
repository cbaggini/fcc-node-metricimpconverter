"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();
  app.get("/api/convert", (req, res) => {
    let initNum = convertHandler.getNum(req.query.input);
    let unit = convertHandler.getUnit(req.query.input).toLowerCase();
    if (unit === "l") {
      unit = "L";
    }
    let retUnit = convertHandler.getReturnUnit(unit);
    let result;
    if (initNum && retUnit) {
      let initUnit = convertHandler.spellOutUnit(unit);
      let returnUnit = convertHandler.spellOutUnit(retUnit);
      let returnNum = convertHandler.convert(initNum, unit);
      let resultString = convertHandler.getString(
        initNum,
        initUnit,
        returnNum,
        returnUnit
      );
      result = {
        initNum: initNum,
        initUnit: unit,
        returnNum: returnNum,
        returnUnit: retUnit,
        string: resultString,
      };
    } else if (retUnit) {
      result = "invalid number";
    } else if (initNum) {
      result = "invalid unit";
    } else {
      result = "invalid number and unit";
    }

    res.send(result);
  });
};
