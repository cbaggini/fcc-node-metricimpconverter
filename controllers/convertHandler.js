function ConvertHandler() {
  this.getNum = function (input) {
    let result = input.split(/[a-zA-Z]/)[0] || "1";
    if ((result.match(/\//g) || []).length > 1) {
      result = "";
    } else if (result.includes("/")) {
      let split = result.split("/");
      result = parseFloat(split[0], 10) / parseFloat(split[1], 10);
    }
    return parseFloat(result);
  };

  this.getUnit = function (input) {
    let result = input.match(/[a-zA-Z]+$/);
    return result ? result[0] : "";
  };

  this.getReturnUnit = function (initUnit) {
    const unitDict = {
      gal: "L",
      L: "gal",
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
      L: "liters",
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
    } else if (initUnit === "L") {
      result = initNum / galToL;
    } else if (initUnit === "mi") {
      result = initNum * miToKm;
    } else if (initUnit === "km") {
      result = initNum / miToKm;
    } else if (initUnit === "lbs") {
      result = initNum * lbsToKg;
    } else if (initUnit === "kg") {
      result = initNum / lbsToKg;
    }
    return result.toFixed(5);
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
}

module.exports = ConvertHandler;
