"use strict";

function first() {
    //do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJs(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJs("javascript", second);
learnJs("javascript", function() {
    console.log("Я учу єтот урок");
});







