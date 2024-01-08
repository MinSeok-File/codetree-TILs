const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let arr1 = input[0].split(' ');
let arr2 = input[1].split(' ');
let mA = Number(arr1[0]);
let eA = Number(arr1[1]);
let mB = Number(arr2[0]);
let eB = Number(arr2[1]);

console.log((mA > mB && eA > eB) ? 1 : 0);