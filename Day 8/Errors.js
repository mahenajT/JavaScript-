/**
 * try, catch, finally, throw
 * {try} and {catch} come in pairs:
 * The throw => allows you to create a custom error.
 * The error object provides two useful properties: name and message.


 */

try {
  alerts("Welcome!");
} catch (err) {
  // document.getElementById("demo").innerHTML = err.message
  console.log(err.message);
}
console.log("JavaScript");

// JavaScript Throws errors

/*
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo2").value;
  try {
    if (x.trim() == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    message.innerHTML = "Input is " + err;
  }
  finally{
    document.getElementById("demo2").value = "";

  }
}

*/

// The Error Object (build in)

//RangeError
let num1 = 3;
try {
  num1.toPrecision(500); // A number cannot have 500 significant digits
} catch (err) {
  console.log(err.name);
}

// Reference Error
// is thrown if you use (reference) a variable that has not been declared:
let x = 5;
try {
  x = y + 1; // y cannot be used (referenced)
} catch (err) {
  console.log(err.name, err.message);
}

// Syntax error
try {
  eval("alert('Hello)"); // Missing ' will produce an error
} catch (err) {
  console.log(err.name, ": ", err.message);
}

// Type Error
let num = 1;
try {
  num.toUpperCase(); // You cannot convert a number to upper case
} catch (err) {
  console.log(err.name, err.message);
}
try {
  decodeURI("%%%"); // You cannot URI decode percent signs
} catch (err) {
  console.log(err.name, err.message);
}

try {
  let result = riskyOperation();
  console.log(result);
} catch (err) {
  console.error("An error occurred: ", err.message);
} finally {
  console.log("This will run regardless of the outcome.");
}

/**
 * 2. Custom Errors
 * You can create custom error messages using the Error object. This helps you to identify specific errors and handle them appropriately.
 */

function validateInput(input){
    if(input === ""){
        throw new Error("Input Cannot be empty")
    }
    return true
}
try {
    validateInput("")
} catch (error) {
    console.error("Validation error: ",error.message )
}
