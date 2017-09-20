'use strict';

const arithmetic = module.exports = {};

arithmetic.add = function (a,b) {

  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  } else {
    let total = a + b;
    return total;
  }
};

arithmetic.sub = function (a,b) {

  if(typeof a !== 'number' || typeof b !== 'number') {
    return null;
  } else {
    let total = a - b;
    return total;
  }
};
