const assertEquals = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const eqArrays = (arr1, arr2) => {
  // check if the array lengths are different
  // if this is true, there is no point moving forward
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1.join(',') === arr2.join(',')) {
    return true;
  }
  else return false;
};
// Tests
assertEquals(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEquals(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEquals(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEquals(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
