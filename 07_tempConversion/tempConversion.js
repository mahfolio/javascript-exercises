const convertToCelsius = function(degFahrenheit) {
  degCelsius = Math.round(((degFahrenheit - 32) * 5 / 9) * 10) / 10;
  return degCelsius;
};

const convertToFahrenheit = function(degCelsius) {
  degFahrenheit = Math.round((degCelsius * 9 / 5 + 32) * 10) / 10;
  return degFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
