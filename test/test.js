var chai = require('chai');
var app = require('../app.js')

var should = chai.should();
var assert = chai.assert;

input1 = [21, 87, 91, 31, 97, 59, 8, 83, 27, 23, 76, 72, 31, 91, 65, 77, 84, 27, 56, 59];
input2 = 'my name is akshay bansal';
object1 = { "flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 } ] };
object2 = { "flatJSON": false, "i.am.not.so.flat": true, "i.am.not.so.unflat": false, "i.am.a": "tree", "dates.0.day": 1, "dates.1.day": 8947 };

describe('app' , function() {
	describe('Second Largest' , function() {
		var output = app.secondLargest(input1);
		it('Type of input', function(){
			assert.isArray(input1);
		})
		it('content of input is not empty', function(){
			assert.isNotEmpty(input1);
		})
		it('content of the input array are all numbers', function(){
			for (var index = 0; index < input1.length; index++) {
				assert.isNumber(input1[index]);
			};
		})
		it('Type of output', function(){
			assert.isNumber(output);
		})

		var output2 = app.secondLargest(input2);
		it('Error in output if input is of wrong type', function(){
			output2.should.be.an('error');
		})
	})

	describe('Calculate Frequency' , function() {
		var output = app.calculateFrequency(input2);
		it('Type of input', function(){
			assert.isString(input2);
		})
		it('content of input is not empty', function(){
			assert.isNotEmpty(input2);
		})
		it('Type of output', function(){
			assert.isObject(output);
		})

		var output2 = app.calculateFrequency(input1);
		it('Error in output if input is of wrong type', function(){
			output2.should.be.an('error');
		})
	})

	describe('Flatten Object' , function() {
		var output = app.flatten(object1);
		it('Type of input', function(){
			assert.isObject(object1);
		})
		it('content of input is not empty', function(){
			assert.isNotEmpty(object1);
		})
		it('Type of output', function(){
			assert.isObject(output);
		})

		var output2 = app.flatten(input2);
		it('Error in output if input is of wrong type', function(){
			output2.should.be.an('error');
		})
	})

	describe('Unflatten Object' , function() {
		var output = app.unflatten(object2);
		it('Type of input', function(){
			assert.isObject(object2);
		})
		it('content of input is not empty', function(){
			assert.isNotEmpty(object2);
		})
		it('Type of output', function(){
			assert.isObject(output);
		})

		var output2 = app.unflatten(input2);
		it('Error in output if input is of wrong type', function(){
			output2.should.be.an('error');
		})
	})
})