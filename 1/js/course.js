"use strict";

let num = 50;

let result = (num === 50) ? true : false;
console.log(result);

switch(num) {
    case 50:
        console.log("правдиво");
        break;
    case 49:
        console.log("Неверно");
        break;
    default:
        console.log("дефолт");
        break;
}