'use strict';

const arithmetic = require('../lib/arithmetic');

describe('#arithmetic.test.js', () => {
  describe('addition function', () => {
    test('should return null in case either arity is not a number', () => {
      const nanAnswer = arithmetic.add('yo', 'k');
      expect(nanAnswer).toEqual(null);
    });
    test('should return the sum if both arity are numbers', () => {
      const nanAnswer = arithmetic.add(7, 11);
      expect(nanAnswer).toEqual(18);
    });
  });
  describe('subtraction function', () => {
    test('should return null in case either arity is not a number', () => {
      const nanAnswer = arithmetic.sub('bye', 'bruh');
      expect(nanAnswer).toEqual(null);
    });
    test('should return the difference if both arity are numbers', () => {
      const nanAnswer = arithmetic.sub(23, 10);
      expect(nanAnswer).toEqual(13);
    });
  });
});