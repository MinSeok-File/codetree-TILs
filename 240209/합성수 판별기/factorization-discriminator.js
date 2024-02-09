const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let ans = 'N';

for (let i = 2; i < n; i++){
    if (n % i === 0){
        ans = 'C';
    }
}
console.log(ans);