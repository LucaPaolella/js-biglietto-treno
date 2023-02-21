'use strict';

const age = parseInt (prompt("Please enter your age:", " "));
console.log(age)

const km = parseInt(prompt("Please tell us how many kilometers you have to travel: ", " "));
console.log(km)

const price = ` This is the price of your ticket: ( ${km} * 0.21)`;
console.log(price)
if (age >= 65){
    console.log(price, "${km} * 0.084");
}
if (age <= 18){
    console.log(price, "${km} * 0.042");
}


/*let price = `This is the price of your ticket: ${firstname}${surname}${color}89` ;
console.log(price)*/