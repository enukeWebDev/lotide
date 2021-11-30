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

