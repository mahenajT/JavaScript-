/**
 * Slice()
 * 1. Does not change the original array
 * 2. Does not take the last range
 * 3. Selects a part of an array, and returns the new array
 * 4. array.slice(start, end) => Parameter - Optional
 */

const fruits = ["Apple", "Banana", "Mango", "Orange", "Peach", "Grapes"];
console.log(fruits.length);
const select1 = fruits.slice();
// const select1 = fruits.slice(1,5);
console.log(select1);

// Select elements using negative value
const select2 = fruits.slice(-6, -2);
console.log(select2);

/**
 * -1 => Grapes
 * -2 => Peach
 * -3 => Orange
 * -4 => Mango
 * -5 => Banana
 * -6 => Apple
 */

/**
 *  0 => Apple
 *  1 => Banana
 *  2 => Mango
 *  3 => Orange
 *  4 => Peach
 *  5 => Grapes
 */
