const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const word1 = ['Yo Yo'];
const words0 = [];

describe("#tail ", () => {
  it("returns 1 for ['Yo Yo']", () => {
    tail(word1);
    assert.strictEqual(word1.length, 1);
  });

  it('returns 3 for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    tail(words)
    assert.strictEqual(words.length, 3);
  })

  it('returns 0 for []', () => {
    tail(words0)
    assert.strictEqual(words0.length, 0);
  })

});


