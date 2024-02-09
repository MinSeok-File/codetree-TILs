const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let cnt = 0, prod = 1; 

while (true){
    if (prod === n){
        console.log(cnt);
        break;
    }
    prod *= 2;
    cnt++;
}