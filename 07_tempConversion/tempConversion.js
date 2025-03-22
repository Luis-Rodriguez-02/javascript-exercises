const convertToCelsius = function (tempInF) {
  const convertedTemp = (tempInF - 32) * (5 / 9);
  return Math.round(convertedTemp * 10) / 10;
};

const convertToFahrenheit = function (tempInC) {
  const convertedTemp = tempInC * (9 / 5) + 32;
  return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
