"use strict";

const arr = [1, 2 ,3 ,6 ,8];
arr.pop();

arr.push(10);


for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for(let val of arr) {
    console.log(val);
}

arr.forEach(function(item, i, arr) {

});

const str = prompt("ВВедите оценки через запятую", "");
const products = str.split(", ");
console.log(products);