"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,

    calculateTotalSquare:function() {
        let totalSquare = 0;
        this.shops.forEach((val, i)=> {
            totalSquare += val.length * val.width * this.height;
        });

        return totalSquare;
    },
    
};

function isBudgetEnough(data) {
    let volume = data.calculateVolume(data.calculateTotalSquare());
    let totalCost = volume * data.moneyPer1m3;
    if(data.budget / totalCost >= 0) {
        console.log("Бюджета достаточно");
    } else {
        console.log("Бюджета недостаточно");
    }
}


isBudgetEnough(shoppingMallData);