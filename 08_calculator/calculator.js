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

const multiply = function(array) {
  let multiplied = 1;
  for (let i = 0; i < array.length; i++) {
    multiplied = multiplied * array[i];
  }
  return multiplied;
};

const power = function(numOne, numTwo) {
	const poweredUp = numOne ** numTwo;
  return poweredUp;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }

  let result = 1;
  for (let i = num; i > 0; i--){
   result *= i;
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
