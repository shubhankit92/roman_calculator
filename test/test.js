var assert = require('assert');
var serverObject = require('../server.js');
describe('Unit_Test_Cases', function() {
  describe('#calculateValue', function() {
    it('should return -1 when the input roman numerals are not valid', function() {
    	//MMMMM is not a valid numeral
    	var value = serverObject.calculateValue('MMM', 'MMMMM', '*');
      assert.equal(-1, value);
    });

    it('should return -1 when the input numerals are integers', function() {
    	var value = serverObject.calculateValue('0', '-1', '*');
      assert.equal(-1, value);
    });

    it('should return -1 when the resultant roman numerals is not valid', function() {
    	// resultant value will be 3000 * 1000 = 3000000 which is invalid
    	var value = serverObject.calculateValue('MMM', 'M', '*');
      assert.equal(-1, value);
    });

    it('should return 1001 (MI) when the M and I are given for addition', function() {
    	// resultant value will be 3000 * 1000 = 3000000 which is invalid
    	var value = serverObject.calculateValue('M', 'I', '+');
      assert.equal('MI', value);
    });
  });

  describe('#numberToRoman', function() {
    it('should return MMM when 3000 is given', function() {
    	//MMMMM is not a valid numeral
    	var value = serverObject.numberToRoman(3000);
      assert.equal('MMM', value);
    });
  });

  describe('#romanToValue', function() {
    it('should return 3000 for MMM roman numeral', function() {
    	//MMMMM is not a valid numeral
    	var value = serverObject.romanToValue('MMM');
      assert.equal(3000, value);
    });
  });
});