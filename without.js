const assertEquals = (arr1, arr2) => {
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
  if (arr1.join(',') === arr2.join(',')) {
    return true;
  }
  else return false;
};

const without = (source, itemsToRemove) => {
  let itemsToKeep = [];

  for (let i = 0; i < source.length; i++) {
    if (source.includes(itemsToRemove[i])) {
    } else {
      itemsToKeep.push(source[i]);
    }
  }
  console.log(itemsToKeep); //- just a debugging tool
  return itemsToKeep;
};

//TEST CODE
assertEquals(without([1, 2, 3], [1]), [1]);
assertEquals(without(['a', 'b', 'c'], ['a']), ['a']);