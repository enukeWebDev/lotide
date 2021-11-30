/*
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return (`✅ ✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    return (`❌ ❌ ❌ Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};
*/
const assertEqual = require('./assertEqual');

const countLetters = string => {
  const outputObj = {}; //placeholder for the new object

  for (let letters of string) {
    if (!outputObj[letters]) {
      outputObj[letters] = 1;
    } else {
      outputObj[letters] += 1;
    }
  }
  return outputObj;
};

module.exports = countLetters;
/*
console.log(countLetters("L H L"));
console.log(assertEqual((countLetters("LHL"))["L"], 2));
*/



