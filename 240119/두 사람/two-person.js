const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let arrA = input[0].split(' ');
let arrB = input[1].split(' ');

let ageA = Number(arrA[0]);
let sexA = arrA[1];
let ageB = Number(arrB[0]);
let sexB = arrB[1];

if ((ageA >= 19 && sexA === 'M') || (ageB >= 19 && sexB === 'M')) console.log(1);
else console.log(0);