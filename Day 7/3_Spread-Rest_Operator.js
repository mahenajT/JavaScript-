/**
 * Spread Operator (...)
 * = > Expands Element
 * Rest Operator {... }
 * => Collects Element

 * 1. Array
 * 2. Object
 */

/* Spread Operator (...) */
// With Array
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

const numbersThree = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbersThree;
console.log(one);
console.log(two);
console.log(rest);

// With Objects
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const updatedVehicleInfo = {...myVehicle, ...updateMyVehicle}
console.log(updatedVehicleInfo);

// Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.


/* Rest Operator */
function sum(...numbers){
    return numbers.reduce((total, value) => total + value,0)
}
let sumOfNumbers = sum(1,2,3,4,5,6,7,8,9,10)
console.log(sumOfNumbers);