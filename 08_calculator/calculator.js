const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  const sum = arr.reduce((sum, num) => {
    return sum + num;
  }, 0);

  return sum;
};

const multiply = function (arr) {
  const prod = arr.reduce((product, curr) => {
    return product * curr;
  }, 1);

  return prod;
};

const power = function (a, b) {
  let result = 1;
  for (let i = b; i > 0; i--) {
    result *= a;
  }

  return result;
};

const factorial = function (num) {
  let result = 1;

  if (num == 0) return 1;

  for (let i = num; i > 1; num--) {
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
  factorial,
};
