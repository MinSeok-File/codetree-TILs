const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

let result ='';
result += parseInt(a / b) + '.';

for (let i = 1; i <= 20; i++){
    a %= b;
    a *= 10;
    result += parseInt(a / b);
}
console.log(result);