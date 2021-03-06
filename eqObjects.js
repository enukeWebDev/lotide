const assertEqual = (actual, expected) => {
  if (actual === expected) {
    //console.log(`✅ ✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
    return `✅ ✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`;
  } else {
    //console.log(`❌ ❌ ❌ Assertion Failed: ${[actual]} !== ${[expected]}`);
    return `❌ ❌ ❌ Assertion Failed: ${[actual]} !== ${[expected]}`;
  }
};
//change the console.log to return to eliminate the undefined bug

const eqArrays = (arr1, arr2) => {
  // check if the array lengths are different
  // if this is true, there is no point moving forward
  if (arr1.length !== arr2.length) {
    return false;
  }
  else return true;
};

const eqObjects = (object1, object2) => {
  let arr1 = Object.keys(object1);
  let arr2 = Object.keys(object2);
  //Compare the length of the 2 arr and return false if not the same
  if (arr1.length !== arr2.length) {
    // console.log(arr1.length);
    // console.log(arr2.length);
    return false;
  }

  for (const key of arr1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return true;
      }
      else if (object2[key] !== object1[key]) {
        return false;
      }
    }
  }
  return true;
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false