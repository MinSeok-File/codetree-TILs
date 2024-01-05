const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('.');
let y = input[0];
let m = input[1];
let d = input[2];

console.log(`${m}-${d}-${y}`);