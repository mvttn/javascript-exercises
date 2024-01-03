const convertToCelsius = function (tempInFahrenheit) {
  let tempInCelsius = (tempInFahrenheit - 32) * (5 / 9);
  return parseFloat(tempInCelsius.toFixed(1));
};

const convertToFahrenheit = function (tempInCelsius) {
  let tempInFahrenheit = tempInCelsius * (9 / 5) + 32;
  return parseFloat(tempInFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
