/**
 *  Destructing Arrays
 *  Destructing Objects
 */
const vehicles = ["mustang", "f-150", "expedition"];

// old way of array destructing
/*
const car1 = vehicles[0];
const truck1 = vehicles[1];
const suv1 = vehicles[2];
*/
// New way of assigning
/*
const [] = vehicles;
const [car, truck, suv] = vehicles
console.log(car);
console.log(truck);
console.log(suv);
*/

const [car2, , suv] = vehicles;

// Destructuring comes handy when a function returns an array
function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;
  return [add, subtract, multiply, divide];
}
// const [] = calculate()
const [addition, , , division] = calculate(20, 10);
console.log(addition);

//  Destructing Objects

const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};
// Old way
function myVehicle(vehicle) {
  const message =
    "My " +
    vehicle.type +
    " is a " +
    vehicle.color +
    " " +
    vehicle.brand +
    " " +
    vehicle.model +
    ".";
  console.log(message);
}
myVehicle(vehicleOne);

// The new way of using an object inside a function:
// With destructuring

const vehicleTwo = {
  brand: "Lamborghini",
  model: "Urus",
  type: "car",
  year: 2018,
  color: "gray",
};

function vehicleNoTwo({ type, color, brand, model }) {
  const message =
    "My " + type + " is a " + color + " " + brand + " " + model + ".";
  console.log(message);
}
vehicleNoTwo(vehicleTwo);

// Destructure deeply nested objects
const vehicleThree = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
  registration: {
    city: "Houston",
    state: "Texas",
    country: "USA",
  },
};

function vehicleNoThree({ model, registration: { state } }) {
  const message = "My " + model + " is registered in " + state + ".";
  console.log(message);
}
vehicleNoThree(vehicleThree);
