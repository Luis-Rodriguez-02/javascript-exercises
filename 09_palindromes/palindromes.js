const palindromes = function (str1) {
  const alphaNumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  const onlyAlpha = str1
    .toLowerCase()
    .split("")
    .filter((char) => alphaNumerical.includes(char))
    .join("");

  const reversedOnlyAlpha = onlyAlpha.split("").reverse().join("");

  return onlyAlpha == reversedOnlyAlpha;
};

palindromes("racecar!");

// Do not edit below this line
module.exports = palindromes;
