const ft = 30.48;
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
let total = n * ft

console.log(total.toFixed(1));