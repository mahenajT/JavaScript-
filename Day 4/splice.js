/**
 * splice()
 * 1. Adds or Removes or Replace array elements
 * 2. array.splice(start, deleteCount, item1, item2, ... , itemX)
 *    start => Required
 *    deleteCount => Optional
 *    item => Optional
 * 3. The splice() method overwrites the original array.
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
fruits.splice(3, 1, "Papaya");
console.log(fruits);
