"use strict";

// //      *
// //     ***
// //    *****
// //   *******
// //  *********
// // ***********
const lines = 10;
let result = '';

for (let i = 0; i <= lines; i++) {
  for (let j = lines - i; j > 0; j--) {
    result += " ";   
  }
  for (let k = 0; k < i * 2 + 1; k++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);

