
/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};
*/

const assertEqual = require('./assertEqual');

const tail = restOfElem => {
  return restOfElem.slice(1);
};

module.exports = tail;


