const assertEqual = require('./assertEqual');

const tail = restOfElem => {
  return restOfElem.slice(1);
};

module.exports = tail;


