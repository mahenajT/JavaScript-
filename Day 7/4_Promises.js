/**
 * Promises
 * A Promise is an Object that links Producing code and Consuming code
 * Producing code => is code that can take some time
 * Consuming Code => is code that must wait for the result
 *
 * The Promise object supports two properties: state and result.
 * Promises are used to handle asynchronous operation, providing a way to handle success and failure cases
 * A Promise contains both the producing code and calls to the consuming code
 * The Promise object supports only two parameters(state, result)
 * You can not access Promise properties state and result
 * Promise.then() takes only two arguments
 */

/** 
// JavaScript Promise Object
let myPromise = new Promise(function (resolve, reject) {
  // "Producing Code" (May take some times)
  resolve(); // when successful
  reject(); // when error
});
// "Consuming Code" (Must wait for fulfilled Promise)

// Here is how to use a Promise:
promise.then(
  function (value) {// code if successful },
  function (error) {// code if some error }
);
*/
// Promise Object Properties
const promiseObj = {
  state: "result",
  pending: "undefined",
  fulfilled: "a result value",
  rejected: "an error object",
};

// Example
let myPromise = new Promise(function (resolve, reject) {
  let x = 0;

  // The producing code (this may take some time)
  if (x == 0) {
    resolve("Success! / OK ; x == 0");
  } else {
    reject("Error!");
  }
});
myPromise.then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);

// Waiting for a Timeout => Using Callback

function myFunction(value) {
  console.log(value);
}

setTimeout(function () {
  myFunction("I love JavaScript!!");
}, 3000);

// Using Promise
let myPromise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("I love Coding!!");
  }, 2000);
});
myPromise2.then(function (value) {
  console.log(value);
});

let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});

promise
  .then((result) => {
    console.log(result); // Success!
  })
  .catch((error) => {
    console.log(error);
  });
