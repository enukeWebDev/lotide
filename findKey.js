/*
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};
*/

const assertEqual = require('./assertEqual');

const findKey = (object, callbackFunc) => {
  for (let keys in object) {
    // to iterate in all key and values of the object
    //console.log(keys);
    //console.log(object);
    if (callbackFunc(object[keys])) {
      return keys;
    }
  }
};

module.exports = findKey;
