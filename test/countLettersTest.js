const { assert } = require('chai');
const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

describe('#countLetters', () => {
  it("returns true for , ('LHL') ['L], 1", () => {
    let result = countLetters('LHL');
    assert.strictEqual(result['L'], 2);
  });


});


//TEST CODE
//console.log(countLetters("L H L"));
//console.log(countLetters("lighthouse in the house"));
//console.log(countLetters(""));

//console.log(assertEqual((countLetters("LHL"))["L"], 1));
//console.log(assertEqual((countLetters("LHL"))["H"], 1));
