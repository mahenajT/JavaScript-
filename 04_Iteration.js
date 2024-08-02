// For Each()
const arr1 = [45, 86, 32, 6, 9];
arr1.forEach(callBackFunc);

function callBackFunc(value, index, array) {
  console.log(`Value: ${value}, Position: ${index}. of this array: `, array);
}

const arr2 = [45, 4, 9, 16, 25];
arr2.forEach(func);
function func(value, index, array) {
  console.log(value);
}

// map()

const array1 = ["2", "7", , "22", "55"];
const array2 = array1.map(callBack);

function callBack(value, index, array) {
  return value * 2;
}
console.log(array2);

// flatMap()

const oldArray = [1, 2, 3];
const newArray = oldArray.flatMap((value) => [value, value * 12]);
console.log(newArray);

// Difference between map() And flatMap()

const case1 = [1, 2, 3];
const doubled = case1.map((value) => {
  return [value, value * 2];
});
console.log(doubled); // output: [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ]

const case2 = [1, 2, 3, 4, 5];
const Doubled = case2.flatMap((value) => {
  return [value, value * 2];
});
console.log(Doubled); // output [1, 2, 2, 4, 3, 6, 4, 8, 5, 10];

// Array filter()

const arr3 = [1, 25, 3, 44, 64, 3];
const over18 = arr3.filter(filterOut);

function filterOut(value, index, array) {
  return value > 18;
}
console.log(over18);

// Function to check if a number is even
const isEven = (value) => value % 2 === 0;
let evenNum = arr3.filter(isEven);
console.log(evenNum); // Output: [44, 64]

const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 27 },
  { name: "Charley", age: 7 },
  { name: "David", age: 47 },
];
function isAdults(person) {
  return person.age >= 18;
}
const adults = people.filter(isAdults);
console.log(adults);
