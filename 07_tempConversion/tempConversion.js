const convertToCelsius = function(temperatureFahrenheit) {
  let tempCelsius = ((temperatureFahrenheit - 32) * 5 / 9);
  return Math.round(tempCelsius * 10) / 10;
};

const convertToFahrenheit = function(temperatureCelsius) {
  let tempFahrenheit = ((temperatureCelsius * (9 / 5) + 32));
  return Math.round(tempFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
