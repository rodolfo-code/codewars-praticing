// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

const assert = require("assert");

// Código

const isIsogram = (str) => {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j < str.length; j += 1) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true
};

// Unit test

assert.deepStrictEqual(isIsogram("Dermatoglyphics"), true);
assert.deepStrictEqual(isIsogram("isogram"), true);
assert.deepStrictEqual(
  isIsogram("aba"),
  false,
  "same chars may not be adjacent"
);
assert.deepStrictEqual(
  isIsogram("moOse"),
  false,
  "same chars may not be same case"
);
assert.deepStrictEqual(isIsogram("isIsogram"), false);
assert.deepStrictEqual(
  isIsogram(""),
  true,
  "an empty string is a valid isogram"
);
