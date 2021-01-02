// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

const assert = require("assert");

// Escreva seu código
const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;


// Unit Test
assert.deepStrictEqual(past(0, 1, 1), 61000);
assert.deepStrictEqual(past(1, 1, 1), 3661000);
assert.deepStrictEqual(past(0, 0, 0), 0);
assert.deepStrictEqual(past(1, 0, 1), 3601000);
assert.deepStrictEqual(past(1, 0, 0), 3600000);
