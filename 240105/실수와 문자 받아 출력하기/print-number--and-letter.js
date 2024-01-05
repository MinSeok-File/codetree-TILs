const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let [a, b, c] = input.split('\n');
[b, c] = [b, c].map(Number)

console.log(a);
console.log(b.toFixed(2));
console.log(c.toFixed(2));