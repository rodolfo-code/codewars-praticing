// Write an algorithm that takes an array and moves all of the zeros
// to the end, preserving the order of the other elements.

const assert = require("assert");

// Código
const moveZeros = (arr) => {
  //let array = arr;
  return arr.filter(element => element !== 0)
    .concat(arr.filter(element => element === 0))
}

// Unit test
assert.deepStrictEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
assert.deepStrictEqual(moveZeros([9,0,0,9,1,2,0,1,0,1,0,3,0,1,9,0,0,0,0,9]), [9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
assert.deepStrictEqual(moveZeros(["a",0,0,"b","c","d",0,1,0,1,0,3,0,1,9,0,0,0,0,9]), ["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0])
assert.deepStrictEqual(moveZeros(["a",0,0,"b",null,"c","d",0,1,false,0,1,0,3,[],0,1,9,0,0,{},0,0,9]), ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0])
assert.deepStrictEqual(moveZeros([0,1,null,2,false,1,0]), [1,null,2,false,1,0,0])