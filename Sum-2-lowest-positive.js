// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 
// 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

const assert = require('assert');

function sumTwoSmallestNumbers(numbers) {  
  let arr = numbers.sort((a, b) => a - b)
  return arr[0] + arr[1]
  
}


// Unit test
  assert.deepStrictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
  assert.deepStrictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
  assert.deepStrictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
  assert.deepStrictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
  assert.deepStrictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");