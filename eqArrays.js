const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
  // check if the array lengths are different
  // if this is true, there is no point moving forward
  if (arr1.length !== arr2.length) {
    return false;
  }
  else return false;
};

module.exports = eqArrays;