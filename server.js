// sample code created by Shubhankit Saxena

var readLine = require('readline');
var fs = require('fs');
var _ = require('underscore');

// An array which contains the permissible operations
var OPERATORS = ['+', '-', '*', '/'];

// Inintializing the readline interface
var rLine = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rLine.question("Please enter the first roman number: ", function(firstNumber) {
  rLine.question("Please enter the second roman number: ", function(secondNumber) {
	  rLine.question("Please specify the operator among (+, -, *, /): ", function(operator) {

	  	//Checks if the operator entered by the user is allowed
			if (_.indexOf(OPERATORS, operator) !== -1) {
				//Calling our function with all the parameters
				var resultant = calculateValue(firstNumber, secondNumber, operator);
				//If the resultant is not -1 then we will get the value
				if (resultant !== -1) {
					console.log('The value of the operation is : ', resultant);
				}
 			}
 			else {
 				console.log('Sorry please try again');
 			}
  		rLine.close();
		});
	});
});


function romanToValue(value) {
	//List which contains the roman digits and their corresponding values.
	var arr = {
		"M": 1000,
		"D": 500,
		"C": 100,
		"L": 50,
		"X": 10,
		"V": 5,
		"I": 1,
	}
	//Initialize sum with the first digit of our roman number
	var sum = 0 + arr[value[0]]

	//If the next roman digit in value is of lesser or same value, then add it's value to the sum, 
	//else subtract the value of the previous roman digit from the next one.
	for (var j = 1; j < value.length; j ++) {
		if (arr[value[j]] <= arr[value[j-1]]) {
			sum += arr[value[j]];
		}
		else {
			sum += arr[value[j]] - (2 * arr[value[j-1]]);
		}
	}
	return sum;
}

function numberToRoman(number) {
	//List which contains the roman digits and their corresponding values. We also have some extra values, 
	//because if a roman number have 4 consecutive same digits,
	//then we subtract its value from the next greater digit. 
	var arr = {
		"M": 1000,
		"CM": 900,
		"D": 500,
		"CD": 400,
		"C": 100,
		"XC": 90,
		"L": 50,
		"XL": 40,
		"X": 10,
		"IX": 9,
		"V": 5,
		"IV": 5,
		"I": 1,
	}
	var romanValue = '';
	for (j in arr) {
		while (number >= arr[j]) {
			romanValue = romanValue.concat(j);
			number -= arr[j];
		}
	}
	return romanValue;
}

function calculateValue(leftValue, rightValue, operator) {
	var lValue = romanToValue(leftValue);
	var rValue = romanToValue(rightValue);	
	var resultant = 0;

	//Roman value should be always positive and less than 3999
	if (!lValue || !rValue || lValue <= 0 || rValue <= 0  || lValue > 3999 || rValue > 3999) {
		console.log('Input values are incorrect');
		return -1;
	}

	//Does the desired operation according to the operator value
	switch (operator) {
		case '+': resultant = lValue + rValue; break;
		case '-': resultant = lValue - rValue; break;
		case '*': resultant = lValue * rValue; break;
		case '/': resultant = lValue / rValue; break;
	}

	//Roman value should be always positive and less than 3999
	if (resultant < 1 || resultant > 3999 ) {
		console.log('Output value is out of roman numeral range');
		return -1;
	}
	var romanNumber = numberToRoman(resultant);
	return romanNumber;
}

module.exports = {
	calculateValue: calculateValue,
	numberToRoman: numberToRoman,
	romanToValue: romanToValue
}