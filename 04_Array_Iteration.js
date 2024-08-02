/** Looping Through an Array */

// for Loop
const array1 = ["BWM", "Volvo", "Lamborghini"];
for (let i = 0; i < array1.length; i++) {
  console.log(`Index: ${i}. Item: ${array1[i]}`);
}

// for of Loop
const array2 = ["Lotus", "Lily", "Daisy"];
for (const item of array2) {
  console.log(item);
}

// for each method
const array3 = ["Banana", "Apple", "Mango"];
array3.forEach((item) => {
  console.log(item);
});

