// You have to create a function calcType, which receives 3 arguments: 2 numbers, 
// and the result of an unknown operation performed on them (also a number).

// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

// The possible return strings are: "addition", "subtraction", "multiplication", "division".

const assert = require('assert');

// Código
// const calcType = (a, b, res) =>
//   res === a + b ? 'addition' : 
//   res === a * b ? 'multiplication' : 
//   res === a - b ? 'subtraction' : 'division';

const calcType = (a, b, res) => {
  const obj = {
    [a + b]: 'addition',
    [a * b]: 'multiplication',
    [a - b]: 'subtraction',
    [a / b]: 'division',
  }
  return obj[res]
}

// Unit Test
assert.deepStrictEqual(calcType(1,2,3),'addition');
assert.deepStrictEqual(calcType(10,4,40),'multiplication');
assert.deepStrictEqual(calcType(10,5,5),'subtraction');
assert.deepStrictEqual(calcType(9,5,1.8),'division');