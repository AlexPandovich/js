"use strict";



const lines = 5;
let result = '';
let starsCount = 1;

for (let i = 0; i <= lines; ++i) {
    for(let j = i; j < lines; j++) {
        result += " ";
    }
    for(let k = 0; k < starsCount; k++) {
        result += "*";
    }
    result += "\n"
    starsCount +=2;
}

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

console.log(result);