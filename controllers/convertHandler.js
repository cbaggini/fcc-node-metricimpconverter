function ConvertHandler() {
  this.getNum = function (input) {
    let result = input.split(/[a-zA-Z]/);
    return result[0] ? parseFloat(result[0]) : 1;
  };

  this.getUnit = function (input) {
    let result = input.match(/[a-zA-Z]+$/);
    return result[0];
  };

  this.getReturnUnit = function (initUnit) {
    const unitDict = {
      gal: "l",
      l: "gal",
      mi: "km",
      km: "mi",
      lbs: "kg",
      kg: "lbs",
    };
    let result = unitDict[initUnit] ? unitDict[initUnit] : "";
    return result;
  };

  this.spellOutUnit = function (unit) {
    const unitDict = {
      gal: "gallons",
      l: "liters",
      mi: "miles",
      km: "kilometers",
      lbs: "pounds",
      kg: "kilograms",
    };
    let result = unitDict[unit] ? unitDict[unit] : "";
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if (initUnit === "gal") {
      result = initNum * galToL;
    } else if (initUnit === "l") {
      result = initNum / galToL;
    } else if (initUnit === "mi") {
      result = initNum * miToKm;
    } else if (initUnit === "km") {
      result = initNum / miToKm;
    } else if (initNum === "lbs") {
      result = initNum * lbsToKg;
    } else if (initNum === "kg") {
      result = initNum / lbsToKg;
    }
    return result.toFixed(5);
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
