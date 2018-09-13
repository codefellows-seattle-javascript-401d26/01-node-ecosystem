'use strict';

// Define arithmetic
const arithmetic = {};

arithmetic.add = function (variableA, variableB) {
  if (Number.isNaN(variableA) || typeof (variableA) === 'string') {
    return null;
  }
  if (Number.isNaN(variableB) || typeof (variableA) === 'string') {
    return null;
  }

  return variableA + variableB;
};

arithmetic.sub = function (variableA, variableB) {
  if (Number.isNaN(variableA) || typeof (variableA) === 'string') {
    return null;
  }
  if (Number.isNaN(variableB) || typeof (variableA) === 'string') {
    return null;
  }
  return variableA - variableB;
};

// console.log(arithmetic.sub(2, 3));
// console.log(arithmetic.add('a', 6));

module.exports = arithmetic;
