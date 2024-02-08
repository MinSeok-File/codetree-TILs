const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let sumVal = 0, cnt = 0, res;

for (let i = a; i <= b; i++){
    if(i % 5 === 0 || i % 7 ===0){
        cnt++;
        sumVal += i;
    }
}
res = sumVal / cnt;
console.log(sumVal, res.toFixed(1));