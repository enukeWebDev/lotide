const assertEquals = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log('✅ ');
  } else {
    console.log('❌');
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




