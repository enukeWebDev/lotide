/*

const eqArrays = (arr1, arr2) => {
  // check if the array lengths are different
  // if this is true, there is no point moving forward
  if (arr1.length !== arr2.length) {
    return false;
  }
  else return true;
};

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};
*/

const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const middle = array => {
  //Sort the array to ascending to order using sort method
  //Pass in a compare call back function to sort method to make sure the elements are sorted to ascending order
  //Create a compare function 

  const compareElements = (a, b) => {
    return a - b;
  };
  let sortedArr = array.sort(compareElements);
  //console.log(sortedArr) //for debugging purpose
  let middleElement = [];

  if (array.length === 1 || array.length === 2) {
    //console.log(array.length);
    return [];
  }
  if (array.length % 2 !== 0) {
    middleElement.push(sortedArr[array.length / 2 - 1 / 2]);
    // return middleElement;
  }
  else {
    middleElement.push(sortedArr[array.length / 2 - 1]);
    middleElement.push(sortedArr[array.length / 2]);
    // return middleElement;
  }
  return middleElement;
};

module.exports = middle;

