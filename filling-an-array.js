// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

const assert = require('assert');

const arr = n => {
  let container = [];
  if(!n) {
    return [];
  }
  for (let index = 0; index < n; index++) {
    container.push(index);
  }
  return container;
}
  

assert.deepStrictEqual(arr(), []);
assert.deepStrictEqual(arr(4), [0,1,2,3]);