'use strict';

const arithmetic = require('../lib/arithmetic');

describe('#arithmetic.js', () => {
  describe('testing arithmetic.addition', () => {
    test('Testing that arithmetic.addition is using numbers', () => {
      const output = arithmetic.addition('string', 1);
      expect(output).toEqual(null);
    });
    test('Testing that arithmetic.addition is correctly adding', () => {
      const output = arithmetic.addition(3, 1);
      expect(output).toEqual(4);
    });
  });
  describe('testing arithmetic.subtraction', () => {
    const output = arithmetic.subtraction('string', 1);
    expect(output).toEqual(null);
  });
  test('Testing that arithmetic.subtraction is correctly subtracting', () => {
    const output = arithmetic.subtraction(3, 1);
    expect(output).toEqual(2);
  });
});
