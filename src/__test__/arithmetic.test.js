'use strict';

const arithmetic = require('../lib/arithmetic');

describe('#arithmetic', () => {
  describe('#add', () => {
    test('should return null in the case of NaN arguments', () => {
      const output = arithmetic.add('meme', 'meme two');
      expect(output).toEqual(null);
    });
    test('should return the sum of arguments in the case of both numbers', () => {
      const output = arithmetic.add(25, 24);
      expect(output).toEqual(49);
    });
  });
  describe('#sub', () => {
    test('should return null in the case of NaN arguments', () => {
      const output = arithmetic.sub('meme', 'meme two');
      expect(output).toEqual(null);
    });
    test('should return the difference of arguments in the case of both numbers', () => {
      const output = arithmetic.sub(25, 24);
      expect(output).toEqual(1);
    });
  });
});
