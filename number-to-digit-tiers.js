// Create a function that takes a number and returns an array of strings containing the 
// number cut off at each digit.

// Examples
// 420 should return ["4", "42", "420"]
// 2017 should return ["2", "20", "201", "2017"]
// 2010 should return ["2", "20", "201", "2010"]
// 4020 should return ["4", "40", "402", "4020"]
// 80200 should return ["8", "80", "802", "8020", "80200"]

const assert = require("assert")

// Código
function createArrayOfTiers(num) {
  let str = num.toString();
  let cont = [];
  for (let index = 0; index < str.length; index++) {
    if(index === 0) {
      cont.push(str[0]);
    } else {
      cont.push(cont[index - 1] + str[index]);
    }
  }
  return cont;
}


// Unit test
assert.deepStrictEqual(createArrayOfTiers(420), ["4", "42", "420"]);
assert.deepStrictEqual(createArrayOfTiers(2017), ["2", "20", "201", "2017"]);