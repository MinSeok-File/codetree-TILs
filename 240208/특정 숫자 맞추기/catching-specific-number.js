const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let idx = 0;

while (true){
    let n = Number(input[idx]);
    idx++;
    if (n === 25){
        console.log('Good');
        break;
    }
    else if (n < 25) console.log('Higher');
    else if (n > 25) console.log('Lower');
}