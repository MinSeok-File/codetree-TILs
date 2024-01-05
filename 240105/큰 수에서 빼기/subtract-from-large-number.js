const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let [a, b] = input.split(' ').map(Number);

if (a >= b) {
    console.log(a-b);
}
console.log(b-a);