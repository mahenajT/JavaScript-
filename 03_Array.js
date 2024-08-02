/**

 * Array indexes start with 0.
 * JavaScript does not support arrays with named indexes.
 * In JavaScript, arrays always use numbered indexes.
 * Arrays with named indexes are called   ===>>>  associative arrays (or hashes).
 * If you use named indexes, JavaScript will redefine the array to an object.
 * const points = [40]  !== const points = new Array(40)

 */

const cars = ["Saab", "Volvo", "BMW"];

// Create an Array then provide the elements
const array = [];
array[0] = "BMW";
array[1] = "Saab";
array[2] = "Volvo";
array[3] = "Lamborghini";
console.log(array);

// Using JS keyword " new "

const Cars = new Array("Tesla", "Toyota", "Audi");
console.log(Cars, "\n");

const fruits = ["Apple", "Banana", "Grape", "Jackfruit"];
console.log(fruits[0]);

// Changing an Array Element
fruits[0] = "Mango";
fruits[2] = "Guava";
console.log(fruits);

// Converting an Array to a String
console.log(fruits.toString());

console.log(typeof fruits);

// Array can contain different types of Dta types
let myArray = [
  "JavaScript",
  30,
  true,
  null,
  { name: "Jhone", age: 20 },
  `Hello`,
];
console.log(myArray, "\n", "\n", "\n", "\n");

/** Array Properties and Methods */
const flowers = ["Daisy", "Lotus", "Cosmos", "Rose"];

console.log(flowers.length);
console.log(flowers[0]); // Accessing the First Array Element
console.log(flowers[flowers.length - 1], "\n"); // Accessing the Last Array Element

/** Looping Array Elements */

for (let i = 0; i < flowers.length; i++) {
  console.log(flowers[i]);
}

// Adding Array Elements
flowers.push("Lily");
flowers[flowers.length] = "Tulip";
flowers[5] = "Sunflower"; // Creates undefined "holes" in flowers
console.log(flowers);

// Associative Arrays -> Arrays with named indexes

/*
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;     // Will return 0
person[0];         // Will return undefined
*/

// Built-in array constructor
const arr = new Array(50);
const arr2 = new Array("50");

console.log(arr);
console.log(arr2);

const points = new Array(40);
console.log(points);

// How to Recognize an Array
console.log(Array.isArray(points));
console.log(points instanceof Array);
