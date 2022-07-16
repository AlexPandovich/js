"use strict";
const obj = {};

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

//console.log(options.name);
//delete options.height;
//console.log(options);

for(let i in options) {
    if(typeof(options[i]) == 'object') {
        for(let j in options[i]) {
            console.log(`Свойтство ${j} имеет значение ${options[i][j]}`);
        }
    } else {
        console.log(`Свойтство ${i} имеет значение ${options[i]}`);
    }
    
}

//console.log(Object.keys(options).length);
options.makeTest();

const {border, bg} = options.colors;

console.log(border);

