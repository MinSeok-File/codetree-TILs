const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let minN;

if (a <= b && a <= c) minN = a;
else if (b <= a && b <= c) minN = b;
else minN = c;

console.log(minN);