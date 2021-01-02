// Given a month as an integer from 1 to 12, return to which quarter of
// the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter;
// month 6 (June), is part of the second quarter; and month 11 (November),
// is part of the fourth quarter.

const assert = require("assert");

const quarterOf = (month) => {
  return Math.ceil(month / 3);
};


const index = Math.ceil(Math.random() * 12);
if (index < 4) {
  assert.deepStrictEqual(quarterOf(index), 1);
} else if (index < 7) {
  assert.deepStrictEqual(quarterOf(index), 2);
} else if (index < 10) {
  assert.deepStrictEqual(quarterOf(index), 3);
} else {
  assert.deepStrictEqual(quarterOf(index), 4);
}
