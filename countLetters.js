
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return (`✅ ✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    return (`❌ ❌ ❌ Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const countLetters = string => {
  const outputObj = {}; //placeholder for the new object

  for (let letters of string) {
    if (!outputObj[letters]) {
      outputObj[letters] = 1;
    } else {
      outputObj[letters] += 1;
    }
  }
  return outputObj;
};

//TEST CODE
console.log(countLetters("L H L"));
console.log(countLetters("lighthouse in the house"));
console.log(countLetters(""));

console.log(assertEqual((countLetters("LHL"))["L"], 1));
console.log(assertEqual((countLetters("LHL"))["H"], 1));
