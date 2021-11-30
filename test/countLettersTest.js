const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it("returns true for , ('LHL') ['L], 1", () => {
    let result = countLetters('LHL');
    assert.strictEqual(result['L'], 2);
  });


});



