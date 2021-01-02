//Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

const assert = require('assert');

// Código
const toBinary = (n) => parseInt((n >>> 0).toString(2));


// Unit test
assert.deepStrictEqual(toBinary(1), 1);
assert.deepStrictEqual(toBinary(2), 10);
assert.deepStrictEqual(toBinary(3), 11);
assert.deepStrictEqual(toBinary(5), 101);