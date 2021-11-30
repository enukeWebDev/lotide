const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log('✅ ✅ ✅ ');
  } else {
    console.log('❌ ❌ ❌');
  }
};
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  else return true;
};

module.exports = assertArraysEqual;

