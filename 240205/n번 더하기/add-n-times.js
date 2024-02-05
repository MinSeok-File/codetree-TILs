const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let n = Number(input[1]);

for (let i = a+n; i <= (a + n * n); i+=n){
    console.log(i);
}