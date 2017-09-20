'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');


describe('Arithmetic', () => {

  describe('testing add', () => {

    it('should require two numbers', () => {
      let first = arithmetic.add('nein', 9);
      let second = arithmetic.add(1, 'ein');

      expect(first).toBe(null);
      expect(second).toBe(null);

    });

    it('should require two inputs', () => {
      let result = arithmetic.add(3);

      expect(result).toBe(null);
    });

    it('should add two numbers', () => {
      let result = arithmetic.add(4,20);

      expect(result).toEqual(24);
    });
  });
});
