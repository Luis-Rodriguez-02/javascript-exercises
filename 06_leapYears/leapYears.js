const leapYears = function (year) {
  if (year % 4 == 0) {
    // if divisble by 4
    if (year % 100 === 0) {
      // if divisible by 100 must be by 400 to be leap
      return year % 400 === 0;
    }

    // if not divisible by 100 but by 4, must be leap yr
    return true;
  } else {
    // not divisible by 4, not leap yr
    return false;
  }
};

// msut be divisible by 4

// if divisible by 100 , must be divisible by 400

// Do not edit below this line
module.exports = leapYears;
