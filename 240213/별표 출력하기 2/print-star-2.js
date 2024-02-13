const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

let str = '';
for (let i = 0; i < n; i++){
    str = '';
    for (let j = 5; j > i; j--){
        str += '* ';
    }
    console.log(str);
}