const add = function(firstNumber, secondNumber) {
	 return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(givenArray) {
  return givenArray.reduce((total, current) => total + current, 0)
};

const multiply = function(givenArray) {
  return givenArray.reduce((total,current) => total*current)
};

const power = function(firstNumber,secondNumber) {
	return firstNumber**secondNumber;
};

const factorial = function(number) {
	let result = number;
  if (number === 0 || number === 1) {
    return 1;
  }
  while (number > 1) {
    number--;
    result *= number;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
