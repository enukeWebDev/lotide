const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const map = require('../map');


//Test Code
const results1 = map(words, word => word[0]);
//console.log(results1);
const results2 = map(words, word => word.toUpperCase());
//console.log(results2);
const results3 = map(words, word => { return word.length % 2 === 0 });
//console.log(results3);


assertEqual(results1, ['g', 'c', 't', 'm', 't']);
assertEqual(results2, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
assertEqual(results3, [true, false, true, false, false]);

