/**
 * Common Higher-Order Functions in JavaScript:
 *
 * forEach()
 * map()
 * filter()
 * reduce()
 * sort()
 */

/** forEach() */
const numbers = [45, 4, 9, 16, 25];
numbers.forEach((value, index, array) => {
  console.log(value);
});

const fruits = ["apple", "orange", "cherry"]; // The forEach() method is not executed for empty elements.
fruits.forEach((value, index, array) => {
  console.log(value);
});


// Compute the sum:
let sum = 0;
const numbers1 = [65, 44, 12, 4];
numbers1.forEach(sumNum);

function sumNum(item) {
  sum = sum + item;
}
console.log(sum);


// Multiply each element:
const numbers2 = [65, 44, 12, 4];
numbers2.forEach((currentValue, index, array) => {
  array[index] = currentValue * 10;
});
console.log(numbers2);











/** map()
 * 1. Creates a new array by performing a function on each array element
 * 2. Does not change the original array
 * 3. map() does not execute the function for empty elements.
 */


//  multiplies each array value by 2:
const num1 = [1, 2, 3, 4];
const newArr1 = num1.map((value, index, array) => { // ()=> CallBack Function
  return value * 2;
});
console.log(newArr1);


// Return a new array with the square root of all element values:
const num2 = [4, 9, 16, 25];
const newArr2 = num2.map(Math.sqrt);
console.log(newArr2);


// Multiply all the values in an array with 10:
const num3 = [65, 44, 12, 4];
const newArr3 = num3.map(multi);

function multi(num) {
  return num * 10;
}
console.log(newArr3);


// Get the full name for each person:
const persons = [
  { firstName: "Kari", lastName: "Reynolds" },
  { firstName: "Charry", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];
const fullName = persons.map(getFullName);
function getFullName(currentValue) {
  return [currentValue.firstName, currentValue.lastName].join(" ");
}
console.log(fullName);













/** filter()
 * Creates a new array with array elements that pass a test.
 * Does not change the original array.
 */

const num4 = [45, 4, 9, 16, 25];
const over18 = num4.filter((value, index, array) => value > 18);
console.log(over18);

// Return an array of all values in ages[] that are 18 or over:
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(result);












/** reduce() method
 * 1. Runs a function on each array element to produce (reduce it to) a single value.
 * 2. Works from left-to-right in the array.
 * 3. Does not change the original array.
 */

// Sum of all numbers in an array:
const numbers3 = [45, 4, 9, 16, 25];
let sum1 = numbers3.reduce((total, value, index, array) => {
  return (total = total + value);
}, 0);
console.log(sum1);

// Subtract all numbers in an array
const numbers4 = [175, 50, 25];
let result1 = numbers4.reduce((total, value) => {
  return total - value;
});
console.log(result1);

// Round all the numbers and display the sum:
const numbers5 = [15.5, 2.3, 1.1, 4.7];
const getSum = numbers5.reduce((total, value) => {
  return total + Math.round(value);
}, 0);
console.log(getSum);












/** sort()
 * 1.  Sorts the elements as strings in alphabetical and ascending order.
 * 2.  Overwrites the original array.
 * 3.  Syntax -> array.sort(compareFunction)
 */

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "JackFruit"];
console.log(fruits2);
console.log(fruits2.sort()); // Sort the array

// Sort Descending
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.sort();
fruits1.reverse(); // Reverse the array
console.log(fruits1);

// Numeric Sorts
// Sort numbers in ascending order:
const points1 = [40, 100, 1, 5, 25];
points1.sort(function (a, b) {
  return a - b;
});
console.log("a - b = ", points1);

/**
 * todo: a - b
 * If a - b returns a negative value, a will be placed before b.
 * If a - b returns zero, the order of a and b remains unchanged.
 * If a - b returns a positive value, b will be placed before a.
 */

// Sort numbers in descending order:
const points2 = [40, 100, 1, 5, 25];
points2.sort(function (a, b) {
  // comparison function
  // console.log(a);
  // console.log(b);
  return b - a;
});
console.log("b - a = ", points2);

/**
 * todo: ( b - a )
 * If b - a returns a negative value: b will be placed after a in descending order. (Because b is smaller and should come after the larger a.)
 * If b - a returns zero: The order of a and b remains unchanged.
 * If b - a returns a positive value: a will be placed after b in descending order.
 *
 */
// Find the lowest value:
const points3 = [40, 100, 1, 5, 25, 10];
points3.sort(function (a, b) {
  return a - b;
});
let lowest = points3[0];
console.log(points3);
console.log(lowest);

// Find the highest value:
const points4 = [40, 100, 1, 5, 25, 10];
points4.sort((a, b) => {
  return b - a;
});
let highest = points4[0];

console.log(points4);
console.log(highest);

// Find the highest value
const points5 = [20, 44, 77, 10, 43, 24, 64];
points5.sort((a, b) => {
  return a - b;
});

let highest2 = points5[points5.length - 1];
console.log(highest2);
