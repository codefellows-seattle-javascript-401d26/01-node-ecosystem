'use strict';

const arithmetic = module.exports = {};

arithmetic.addition = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
   
  return null;
};

arithmetic.subtraction = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
    
  return null;
};
