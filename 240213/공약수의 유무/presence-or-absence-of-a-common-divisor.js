const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let ans = 0;

for (let i = a; i <= b; i++){
    if (1920 % i === 0 && 2880 % i === 0){
        ans = 1
    }
}
console.log(ans);