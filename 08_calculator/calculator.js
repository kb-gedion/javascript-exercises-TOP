const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(element => {
    sum += +element
  });

  return sum;
};

const multiply = function(arr) {
  let first = arr[0];
  for (let i = 1; i < arr.length; i++)
    first *= arr[i];
  return first;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(x) {
	let factorial = 1;
  for (let i = 1; i <= x; i++) {
    factorial *= i;
  }
  return factorial;
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
