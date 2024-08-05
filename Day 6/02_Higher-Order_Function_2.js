/**
 * find() => Array Search 
   => Does not change the original array.
 * findIndex() => Array Search 
   => Does not change the original array.
   
 * every()
 * some()
 */

/** find() method
 * Returns the value of the { first array element } that passes a test function.
 * Executes a function for each array element.
 * returns undefined if no elements are found.
 * * Does not change the original array.
 */

// Find the value of the first element with a value over 18:
const ages1 = [4, 9, 16, 25, 29];
let first1 = ages1.find((value, index, array) => {
  return value > 18;
});
console.log("First element = ", first1);

/** findIndex() method
 * Method returns the index (position) of the first element that passes a test.
 * Method returns -1 if no match is found.
 ** Does not change the original array.
 */

// Find the first element with a value over 18:
const ages2 = [5, 10, 18, 20];
const res = ages2.findIndex((value, index, array) => {
  return value >= 18;
});

console.log("First number over 18 has index: ", res);

/** Every
 * The every() method checks if all array values pass a test.
 * Return -> true ||  false
 */

// Check if all/every values are over 18:

const ages3 = [32, 33, 16, 40];
const allOver18 = ages3.every((values, index, array) => {
  return values > 18;
});
console.log(allOver18); // Are all ages over 18?

// Check if all answers are the same:
const survey = [
  { name: "Steve", answer: "Yes" },
  { name: "Jessica", answer: "Yes" },
  { name: "Peter", answer: "Yes" },
  { name: "Elaine", answer: "Yes" },
];

let result = survey.every((element, index, array) => {
  if (index === 0) {
    return true; // First Element
  } else {
    return element.answer === array[index - 1].answer;
  }
});
console.log(result); // false

// Check if all/every values are over 18:

const ages4 = [32, 33, 16, 40];
const allOver19 = ages3.some((values, index, array) => {
  return values > 19;
});
console.log("allOver19: ", allOver19); // Are all ages over 19?
