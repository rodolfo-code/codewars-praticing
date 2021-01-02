// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 >> [5,4,3,2,1]

const assert = require('assert');

// Código
const reverseSeq = n => {
  let sum = [];
  for(let i = n; i > 0; i--) {
    sum.push(i);
  }
  return sum;
};

// Unit test
assert.deepStrictEqual(reverseSeq(5), [5, 4, 3, 2, 1])