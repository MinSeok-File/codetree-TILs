const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let idx = 0, cnt = 0;

while(cnt < 3){
    let n = Number(input[idx]);
    idx++;
    if (n % 2 !== 0) continue;
    else if (n % 2 === 0){
        console.log(parseInt(n/2));
        cnt++;
    } 
}