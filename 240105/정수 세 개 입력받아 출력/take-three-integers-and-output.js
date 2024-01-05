const fs = require("fs");
let input = fs.readFileSync(0).toString();
let [d, c] = input.split('\n');
let [a, b] = d.split(' ').map(Number);

console.log(`${a} ${b} ${c}`)