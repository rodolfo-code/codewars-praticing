// In this kata you will create a function that takes a list of non-negative
// integers and strings and returns a new list with the strings filtered out.

const assert = require('assert');

// Código
const filter_list = (l) => l.filter(element => element === parseInt(element));

//Ou
//const filter_list = (l) => l.filter(Number.isInteger)

// Unit test
assert.deepStrictEqual(filter_list([1,2,'a','b']),[1,2])
assert.deepStrictEqual(filter_list([1,'a','b',0,15]),[1,0,15])
assert.deepStrictEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123])