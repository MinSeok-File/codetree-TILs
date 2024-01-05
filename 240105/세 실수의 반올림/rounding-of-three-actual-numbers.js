const fs = require("fs");
let input = fs.readFileSync(0).toString();
let [a, b, c] = input.split('\n').map(Number);

console.log(`${a.toFixed(3)} 
${b.toFixed(3)} 
${c.toFixed(3)}`);