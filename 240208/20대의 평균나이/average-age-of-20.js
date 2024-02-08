const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let idx = 0, sumVal = 0, cnt = 0;

while(true){
    let x = Number(input[idx]);
    if (parseInt(x / 10) !== 2) break;
    sumVal += x;
    idx++;
    cnt ++;
}
console.log((sumVal / cnt).toFixed(2));