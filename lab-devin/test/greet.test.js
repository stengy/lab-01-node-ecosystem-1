'use strict';

const greet = require('../lib/greet.js');
const expect = require('expect');


describe('greet', () => {

  describe('testing for input value type', () => {

    it('should not accept non string values as arguments', () => {

      let result = greet(42);

      expect(result).toBe(null);
    });
  });

  describe('testing greet output', () => {

    it('should return with hello followed by input', () => {

      let result = greet('Linda');

      expect(result).toBe('Hello, Linda');
    });
  });
});
