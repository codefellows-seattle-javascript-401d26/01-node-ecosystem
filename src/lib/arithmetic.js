'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (augend, addend) => {
  if (typeof augend !== 'number' || typeof addend !== 'number') {
    return null;
  } 
  return augend + addend;
};

arithmetic.sub = (minuend, subtrahend) => {
  if (typeof minuend !== 'number' || typeof subtrahend !== 'number') {
    return null;
  } 
  return minuend - subtrahend;
};
