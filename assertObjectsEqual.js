const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line

  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


