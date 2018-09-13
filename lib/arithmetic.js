'use strict';

const maths = module.exports = {};

maths.Sum = (addendOne, addendTwo) => {
  if (isNaN(addendOne) || isNaN(addendTwo)) {
    return null;
  }
  return addendOne + addendTwo;
};

maths.Sub = (minuend, subtrahend) => {
  if (isNaN(minuend) || isNaN(subtrahend)) {
    return null;
  }
  return minuend - subtrahend;
};
