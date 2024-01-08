const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let a = Number(input);

if (a >= 100){
    console.log('vapor');
}
else if (a >= 0){
    console.log('water');
}
else {
    console.log('ice');
}