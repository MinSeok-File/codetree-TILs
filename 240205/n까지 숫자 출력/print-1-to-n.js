const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let result = '';
let i = 1
while (i <= 10){
    result += i + ' ';
    i++;
}
console.log(result);