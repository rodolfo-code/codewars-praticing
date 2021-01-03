// Given a set of numbers, return the additive inverse of each. Each positive becomes
// negatives, and the negatives become positives.

const assert = require("assert");

// Código

const invert = (array) =>
  array.map(i => i === 0? 0 : -i);

// Unit test
assert.deepStrictEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
assert.deepStrictEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
assert.deepStrictEqual(invert([]), []);
assert.deepStrictEqual(invert([0]), [0]);
