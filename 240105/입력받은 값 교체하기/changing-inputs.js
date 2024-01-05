const fs = require("fs");
let input = fs.readFileSync(0).toString();
let [a, b] = input.split(' ').map(Number);
[a, b] = [b, a];

console.log(`${a} ${b}`)