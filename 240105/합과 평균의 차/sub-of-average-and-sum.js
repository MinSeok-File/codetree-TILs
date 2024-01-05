const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let total = a+b+c
let avr = (a+b+c) / 3;

console.log(total);
console.log(avr);
console.log(total-avr);