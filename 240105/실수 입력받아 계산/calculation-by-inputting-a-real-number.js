const fs = require("fs");
let input = fs.readFileSync(0).toString();
let [a, b] = input.split('\n').map(Number);
let total = a + b;

console.log(total.toFixed(2));