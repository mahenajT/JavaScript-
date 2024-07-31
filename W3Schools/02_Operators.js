/*
if (condition1) {
   / block of code to be executed if condition1 is true
} else if (condition2) {
   / block of code to be executed if the condition1 is false and condition2 is true
} else {
   / block of code to be executed if the condition1 is false and condition2 is false
}

*/

if (new Date().getHours() < 13) {
  console.log("Good Day!");
} else {
  console.log("Good Evening!");
}
console.log(new Date().getHours());

if (new Date().getHours() < 10) {
  console.log("Good Morning!");
} else if (new Date().getHours() < 20) {
  console.log("Good Day!!!");
} else {
  console.log("Good Evening!");
}

if (Math.random() < 0.5) {
  console.log("<a href='https://w3schools.com')>Visit W3Schools</a>");
} else {
  console.log("<a href='https://wwf.org'>Visit WWF</a>");
}

let random = Math.floor(Math.random() * 20);
console.log(random);
console.log(random < 10);
