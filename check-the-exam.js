// The first input array is the key to the correct answers to an exam,
// like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array
// of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each
// blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

const assert = require("assert");

// Código
// const checkExam = (array1, array2) => {
//   let grade = 0;
//   array2.forEach((element, index) => {
//     element === '' ? (grade += 0)
//       : element === array1[index] ? (grade += 4)
//       : element !== array1[index] ? (grade -= 1)
//       : grade;
//   });
//   grade < 0 ? grade = 0 : grade;
//   return grade;
// };

const checkExam = (array1, array2) =>
  (grade = array2.reduce(
    (acc, curr, index) =>
      acc + (curr === array1[index] ? 4 : curr === "" ? 0 : -1
      ), 0)) > 0 ? grade: 0;

// Unit test
assert.deepStrictEqual(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
assert.deepStrictEqual(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
assert.deepStrictEqual(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
assert.deepStrictEqual(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);
