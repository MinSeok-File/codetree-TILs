const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let ans = 'P';

for (let i = 2; i < n; i++){
    if (n % i === 0){
        ans = 'C'
        break;
    }
}
console.log(ans);