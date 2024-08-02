// Array reduce()

const numbers1 = [5, 2, 3, 4, 5, 67, 8, 9, 10];
let sum1 = numbers1.reduce(callBack, 0); // 0 => initial value

function callBack(total, value, index, array) {
  return total + value;
}
console.log(sum1);

// reduceRight()
const numbers2 = [45, 4, 9, 16, 25];
let sum2 = numbers2.reduceRight((total, value, index, array) => {
  return total + value;
}, 0);
console.log(sum2);
const numbers3 = [14, 41, 32, 16, 25];

// filter()
let Over18 = numbers3.filter((value, idx, arr) => {
  return value > 18;
});
console.log(`Values over 18 are: ${Over18} `);

// every()
let allOver18 = numbers3.every((value, idx, arr) => {
  // Returns true if all elements satisfy the condition, otherwise false.
  return value > 18;
});

// some()
console.log(`All over 18 is ${allOver18}`);
const someOver18 = numbers3.some((val, idx, arr) => {
  //Returns true if at least one element satisfies the condition
  return val > 18;
});
console.log(someOver18);

// Array.from()
const array1 = Array.from("ABCDEFG");
console.log(array1);

// keys()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
for (const item of keys) {
  console.log(item);
}

// entries()
// Create an Array Iterator, and then iterate over the key/value pairs:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const Entry = fruits2.entries();
for (let i of Entry) {
  console.log(i);
}

// with()
const months = ["January", "February", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);

// Spread()
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

console.log([q1, q2, q3, q4]);
const fullYear = [...q1, ...q2, ...q3, ...q4];
console.log(fullYear);
