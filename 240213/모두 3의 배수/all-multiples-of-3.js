const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let ans = 1;

for (let i = 0; i < 5; i++){
    let x = Number(input[i]);
    if (x % 3 !== 0){
        ans = 0;
        break;
    }
}
console.log(ans);