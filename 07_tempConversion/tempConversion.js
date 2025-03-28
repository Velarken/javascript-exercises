const convertToCelsius = function(temperature) {
  // Formula to use:  (x-32)*(5/9)
  let convertedTemp = ((temperature - 32)* (5/9))
  let roundedCelciusTemp = convertedTemp.toFixed(1);
  // Round answer to 1 decimal place
  return parseFloat(roundedCelciusTemp);
  
};

const convertToFahrenheit = function(temperature) {
  // Formula to use:  (x + (9/5) + 32)
  const convertedTemp = ((temperature * (9/5)) + 32);
  let roundedFahrenheitTemp = convertedTemp.toFixed(1);

  return parseFloat(roundedFahrenheitTemp);
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
