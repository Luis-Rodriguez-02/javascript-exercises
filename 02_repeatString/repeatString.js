const repeatString = function (str, numTimes) {
  //create var to hold newString
  if (numTimes < 0) return "ERROR";
  let newString = "";
  // loop until provided num times
  for (let i = 0; i < numTimes; i++) {
    newString = newString.concat(str);
  }

  return newString;
};

// Do not edit below this line
module.exports = repeatString;
