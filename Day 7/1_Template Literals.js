// Template Literals / String Template / Template String
/** Template literals allow for easier string interpolation and multi line strings using backticks(` `) */
let name = "Smith";
let greeting = `Hello ${name}`;
console.log(greeting);

// Quotes inside Strings
let text = `He often called "Johnny"`;
console.log(text);

// Multiline String
let text2 = `The Quick
Brown fox
jumps over
the lazy dog`;
console.log(text2);

// Interpolation ${}
let firstName = "John";
let lastName = "Smith";

let text3 = `Welcome ${firstName} ${lastName}!`;
console.log(text3);

// Expression Substitution
let price = 10;
let vat = 0.25;
let totalPrice = `Total: ${(price * (1 + vat)).toFixed(2)}`;
console.log(totalPrice);

// HTML Templates
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];
let html = `<h2>header</h2>
<ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;

console.log(html);
