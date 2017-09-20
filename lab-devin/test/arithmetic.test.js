'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');


describe('Arithmetic', () => {

  describe('testing add', () => {

    it('should require two numbers', () => {

      let first = arithmetic.add('nein', 9);
      let second = arithmetic.add(1, 'bist');

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

  describe('testing subtract', () => {

    it('should require two inputs', () => {

      let result = arithmetic.sub(13);

      expect(result).toBe(null);
    });

    it('should require two numbers', () => {

      let sub = 'placeholder';
      let first = arithmetic.sub('brrrt', 10);
      let second = arithmetic.sub(12, 'skrrt');
      let fn = arithmetic.sub(21, sub);

      expect(first).toBe(null);
      expect(second).toBe(null);
      expect(fn).toBe(null);
    });

    it('should subtract two numbers', () => {

      let result = arithmetic.sub(4,1);

      expect(result).toEqual(3);
      
    });
  });
});
