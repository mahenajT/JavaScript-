/**
 *
 * shift()
 * 1. Remove the { First element } of the array
 * 2. Returns the shifted element
 * 3. Changes the Original array
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const shiftedElement = fruits.shift();

console.log(`Shifted 1st Element: ${shiftedElement}`);
console.log(fruits, "\n");

/**
 * pop() => Removes the { Last Element } of the array
 */

const animal = ["Cat", "Dog", "Bird", "Snake", "Fish"];
const poppedElement = animal.pop()

console.log(`Removed Last Element: ${poppedElement}`);
console.log(animal);