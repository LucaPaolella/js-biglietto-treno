'use strict';

const age = parseInt (prompt("Please enter your age:", " "));
console.log(age)

const km = parseInt(prompt("Please tell us how many kilometers you have to travel: ", " "));
console.log(km)

let price = ` This is the price of your ticket: ( ${km} * 0.21)`;
console.log(price)
if (age >= 65){
    price = parseInt (km * 0.84);
    console.log(price)
}
if (age <= 18){
    price = parseInt (km * 0.42);
    console.log(price)
}


/*let price = `This is the price of your ticket: ${firstname}${surname}${color}89` ;
console.log(price)*/