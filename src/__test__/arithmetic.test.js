'use strict';

//! Vinicio - I might want to use require here!
const _arithmetic = require('../lib/arithmetic');

describe('Running the _arithmetic.add and _arithmetic.sub method', () => {
  test('add: If a + b = 4', () => {
    expect(_arithmetic.add(2, 2)).toEqual(4);
  });

  test('add: If value is NaN', () => {
    expect(_arithmetic.add('a', 2)).toEqual(null);
  });

  test('sub: If a - b = 4', () => {
    expect(_arithmetic.sub(2, 2)).toEqual(0);
  });

  test('sub: If value is NaN', () => {
    expect(_arithmetic.sub('a', 2)).toEqual(null);
  });
});
