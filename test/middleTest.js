const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [1, 2, 3, 4];

describe('#middle', () => {
  it("returns 4 for [1, 2, 3, 4, 5, 6, 7]", () => {
    const result = middle(array1);
    assert.deepEqual(result, [4]);
  });
});