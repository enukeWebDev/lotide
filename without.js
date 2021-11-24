const assertEquals = (arr1, arr2) => {
  // console.log(arr2); - just a debugging tool
  // console.log(arr1); - just a debugging tool
  if (eqArrays(arr1, arr2) === true) {
    console.log('✅ ✅ ✅ ');
  } else {
    console.log('❌ ❌ ❌');
  }
};

const eqArrays = (arr1, arr2) => {
  // check if the array lengths are different
  // if this is true, there is no point moving forward
  // console.log(arr1); - just a debugging tool
  // console.log(arr2); - just a debugging tool
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1.join(',') === arr2.join(',')) {
    return true;
  }
  else return false;
};

const without = (source, itemsToRemove) => {
  let itemsToKeep = [];

  for (let i = 0; i < source.length; i++) {
    if (source.includes(itemsToRemove[i])) {
      //if the item is the items i want to remove 
      // i dont want to do anything with it
    } else {
      itemsToKeep.push(source[i]);
      //the items that i like to keep from the array will be assign here
    }
  }
  console.log(itemsToKeep); //- just a debugging tool
  return itemsToKeep;
};

//TEST CODE
assertEquals(without([1, 2, 3], [1]), [1]);
assertEquals(without(['a', 'b', 'c'], ['a']), ['a']);