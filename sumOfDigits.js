// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

const assert = require('assert');

// Código
const digital_root = (n) => {
  let total = n
  while (total.toString().length > 1) {
    total = total.toString().split('').reduce((acc, curr) => Number(acc) + Number(curr))
  }
  return total
}

// Unit test
assert.deepStrictEqual( digital_root(16), 7 )
assert.deepStrictEqual( digital_root(456), 6 )
