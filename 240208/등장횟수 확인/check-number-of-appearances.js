const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let cnt = 0;
for (let i = 0; i < 4; i++){
    if (i % 2 ===0){
        cnt++;
    }
}
console.log(cnt);