// Given a month as an integer from 1 to 12, return to which quarter of
// the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter;
// month 6 (June), is part of the second quarter; and month 11 (November),
// is part of the fourth quarter.

const assert = require("assert");

const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

// Test
const month = Math.ceil(Math.random() * 12);
if (month < 4) {
  assert.deepStrictEqual(quarterOf(month), 1);
} else if (month < 7) {
  assert.deepStrictEqual(quarterOf(month), 2);
} else if (month < 10) {
  assert.deepStrictEqual(quarterOf(month), 3);
} else {
  assert.deepStrictEqual(quarterOf(month), 4);
}
