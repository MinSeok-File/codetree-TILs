const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
let sumVal = 0, aveVal;

for (let i = 1; i <= n; i++){
    let x = Number(input[i]);
    sumVal += x;
}
aveVal = sumVal / n;
console.log(sumVal, aveVal.toFixed(1));