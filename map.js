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
  if (arr1.join(',') === arr2.join(',')) {
    return true;
  }
  else return false;
};


const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//Test Code
//const results1 = map(words, word => word[0]);
//console.log(results1);


const results1 = map(words, word => word[0]);
//console.log(results1);
const results2 = map(words, word => word.toUpperCase());
//console.log(results2);
const results3 = map(words, word => { return word.length % 2 === 0 });
//console.log(results3);

assertEqual(results1, ['g', 'c', 't', 'm', 't']);
assertEqual(results2, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
assertEqual(results3, [true, false, true, false, false]);

