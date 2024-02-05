const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);

let res = '';
while (a <= b){
    if (a % 2 === 1){
        res += a + ' ';
        a *= 2;
    }
    else if (a % 2 === 0){
        res += a + ' ';
        a += 3;
    }
}
console.log(res);