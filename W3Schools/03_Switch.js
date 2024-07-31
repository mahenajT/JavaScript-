/**
 * switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
  
// ============================

switch (key) {
    case value:
        
        break;

    default:
        break;
}
 */

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Invalid day of the week";
}

console.log(`Today is ${day}`);
console.log(new Date().getDay());

let text;
switch (new Date().getDay()) {
  //The default case does not have to be the last case in a switch block:
  default:
    text = "Looking forward.....";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  case 5:
    text = "Today is Friday";
    break;
}
console.log(text);

let tExt;
switch (new Date().getDay()) {
  case 4:
  case 5:
    tExt = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    tExt = "It is Weekend";
    break;
  default:
    tExt = "Looking forward to the Weekend";
}
console.log(tExt);

// Switch cases use strict comparison (===).
let x = "0";
switch (x) {
  case 0:
    console.log("Off");
    break;
  case 1:
    console.log("Oh");
    break;
  default:
    console.log(`No match of ${x}`);
}
