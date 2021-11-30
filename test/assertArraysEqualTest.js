const { assert } = require('chai');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

describe('#assertArraysEqual', () => {
  it("returns true for [1, 2], ['c', 'd']", () => {
    assert.strictEqual(assertArraysEqual([1, 2], ['c', 'd']))
  });

  it("returns false for ['a', 'b'], ['c', 'd', 'e']", () => {
    assert.strictEqual(assertArraysEqual(['a', 'b'], ['c', 'd', 'e']))
  });

});

