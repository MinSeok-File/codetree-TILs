const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

let result = '';
if (a < b){
    let temp = a;
    a = b;
    b = temp;
}

for (let i = a; i >= b; i--){
    result += i + ' ';
}

console.log(result);