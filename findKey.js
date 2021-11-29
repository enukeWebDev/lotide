const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

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
let testObject = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(testObject);
assertEqual(testObject, 'noma');
