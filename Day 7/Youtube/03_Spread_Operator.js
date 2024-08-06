/* Spread Operator */

// pass elements of an array as arguments to a function
function addThreeNumbers(a, b, c) {
  console.log(a + b + c);
}
var ages = [1, 2, 3];
addThreeNumbers(...ages);

// Copy Arrays
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // like arr.slice
arr2.push(4);
console.log(arr1);
console.log(arr2);

// concatenate arrays
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
const merge = [...arr3, ...arr4];
console.log(merge);

// Rest Operator: Condense multiple element into a array
function multiply(multiplier, ...theArgument) {
  return theArgument.map((element) => {
    return multiplier * element;
  });
}
const arr = multiply(12, 1, 2, 3, 4, 5, 6, 7, 8);
console.log(arr);
