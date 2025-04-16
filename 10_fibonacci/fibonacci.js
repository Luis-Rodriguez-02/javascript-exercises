const fibonacci = function (num) {
  //   Create a function that returns a specific member of the Fibonacci sequence:
  //  A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
  // fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
  if (num === 0 || num === "0") {
    return 0;
  } else if (num < 0) {
    return "OOPS";
  } else if (typeof num === "string") {
    num = Number(num);
  }

  let prev = 0;
  let curr = 1;

  for (let i = 1; i < num; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
