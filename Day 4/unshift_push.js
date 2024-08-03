/**
 * unshift() => Adds new elements to the { Beginning } of an array.
 *           => Overwrites the original array or replace it completely.
 *
 * push()    => Adds new elements to the { End } of an array
 *           => Changes length of the array
 *           => Returns a new Length
 */

// unshift()
const animal = ["Cat", "Dog"];

animal.unshift("Penguin", "kangaroo");
console.log(animal);




// push()
const fruits = ["Banana", "Orange"];
console.log(`Initial Length: ${fruits.length}`);

fruits.push("Kiwi");
fruits.push("Lemon", "Jackfruit", "Guava", "Grape");

console.log(fruits);
console.log(`Length after push: ${fruits.length}`);
