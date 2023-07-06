const add = function(numOne = 0, numTwo = 0) {
	const addNumbers = numOne + numTwo;
  return addNumbers;
};

const subtract = function(numOne = 0, numTwo = 0) {
	const subtractNumbers = numOne - numTwo;
  return subtractNumbers;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
