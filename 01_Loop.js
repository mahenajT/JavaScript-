/**=
 *  todo: for Loop
 *  todo: while / do while Loop
 * for (initialization; condition; increment/decrement){code block to be executed}
 * for (expression 1; expression 2; expression 3){}
 *
 */

/** For Loop */
for (let i = 1; i < 5; i++) {
  console.log(i);
}

let array = ["Usa", "Canada", "Tree", "Korea", "Pakistan"];
let text = ""; // Use let instead of const
for (let item = 0; item < array.length; item++) {
  text = text + array[item] + "\n";
}

console.log(text);

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let alphabet = ["A", "B", "C", "D", "E"];

// First for loop
for (let i = 0, len = alphabet.length, text = ""; i < len; i++) {
  text = text + alphabet[i] + " ";
  console.log(text);
}

// Second for loop
let Item = 0;
let length = alphabet.length;
let Txt = "";
for (; Item < length; Item++) {
  Txt += alphabet[Item] + "\n";
}
console.log(Txt);

// Third for loop
// Omitting Expression 3
let item = 0; // Reset item to 0 for the loop to work
for (; item < length; ) {
  console.log(`Letter: ${alphabet[item]}`);
  item++;
}

/** While Loop */

let i = 0;
while (i < 4) {
  console.log(i);
  i++;
}

let res = "";
let ITem = 0;
while (ITem < 3) {
  // res += `The Number is ${ITem}` // Incorrect
  res += `The Number is ${ITem}\n`;
  ITem++;
}
console.log(res);

/** Do while Loop */

do {
  i = 5;
  i++;
  console.log(i);
} while (i < 5);

const cars = ["BMW", "Volvo", "Audi", "Saab", "Ford"];
let carsItem = 0;

// Using (for) Loop
for (; cars[carsItem]; ) {
  console.log(cars[carsItem]);
  carsItem++;
}

// Using (while) Loop

let carItem = 0;
while (cars[carItem]) {
  console.log(`Car Names: ${cars[carItem]}`);
  carItem++;
}
