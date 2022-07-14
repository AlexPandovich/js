"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(`hello ${text}`);
    let num = 10;
}

showFirstMessage("world");
console.log(num);



function ret() {
    let num = 50;
    return num;
}


let anotherNum = ret();
console.log(anotherNum); 
console.log(num);

const logger = function () {
    console.log("hello expression");
};

logger();

const calc = (a,b) => a+b;

console.log(calc(3, 4));