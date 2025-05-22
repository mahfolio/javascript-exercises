const findTheOldest = function (arr) {
  let hiAge = null;
  let ages = [];
  let names = [];
  arr.forEach(person => {
    let hasDate = "yearOfDeath" in person;
    if (!hasDate) {
      person.yearOfDeath = new Date().getFullYear();
    }
    ages.push(person.yearOfDeath - person.yearOfBirth);
    names.push(person.name);
  });

  let theOldest = ages.reduce((highest, element) => {
    if (element > highest) {
      hiAge = element;
    }
    return hiAge;
  }, -Infinity);

  let index = ages.findIndex(element => {
    return element === theOldest;
  });

  let oldestPerson = names[index];

  return oldestPerson;

  // console.log(ages);
  // console.log(theOldest);
  // console.log(index);

  // console.log(`The oldest person is ${names[1]} aged ${hiAge}`);
};

// Do not edit below this line
module.exports = findTheOldest;