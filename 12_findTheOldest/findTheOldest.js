const findTheOldest = function (people) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const oldestPerson = people.reduce((oldestPerson, currPerson) => {
    let newAge = currPerson.yearOfDeath
      ? currPerson.yearOfDeath - currPerson.yearOfBirth
      : currentYear - currPerson.yearOfBirth;
    let oldAge = oldestPerson.yearOfDeath
      ? oldestPerson.yearOfDeath - oldestPerson.yearOfBirth
      : currentYear - oldestPerson.yearOfBirth;

    oldestPerson = newAge > oldAge ? currPerson : oldestPerson;

    return oldestPerson;
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
