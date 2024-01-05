const fs = require("fs");
let input = fs.readFileSync(0).toString();
let [a, b] = input.split('\n').map(Number);

console.log(`${a} ${b}`);