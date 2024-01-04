const fs = require("fs");
let a = Number(fs.readFileSync(0).toString());
let total = a + 1.5;

console.log(total.toFixed(2));