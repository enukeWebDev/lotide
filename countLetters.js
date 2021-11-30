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



