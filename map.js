const assertEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log('✅ ✅ ✅ ');
  } else {
    console.log('❌ ❌ ❌');
  }
}


const eqArrays = (arr1, arr2) => {
  // check if the array lengths are different
  // if this is true, there is no point moving forward
  if (arr1.length !== arr2.length) {
    return false;
  }
  else return true;
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = eqArrays;
module.exports = map;
