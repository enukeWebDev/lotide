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

const letterPositions = (sentence) => {
  const results = {};
  // logic to update results here

  for (let i = 0; i < sentence.length; i++) {
    let tempResult = sentence[i];
    if (tempResult !== ' ') {
      if (results[tempResult]) {
        results[tempResult].push[i];
      }
      else { results[tempResult] = [i] }
    }
  }
  return results;
};

assertArraysEqual(letterPositions('hello').h, [0]);
