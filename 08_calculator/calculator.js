const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(max, min) {
	return max - min;
};

const sum = function(nums) {
	let total = 0;
  for (let num of nums) {
    total += num;
  }

  return total;
};

const multiply = function(nums) {
  let product = 1;
  for (let num of nums) {
    product *= num;
  }

  return product;
};

const power = function(num, toPower) {
	let result = 1;
  for (let i = 1; i <= toPower; i++) {
    result *= num;
  }

  return result;
};

const factorial = function(num) {
	let result = 1;
  for (let i = 1; i <= num; i++) {
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
