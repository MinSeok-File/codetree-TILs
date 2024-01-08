const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let a = Number(input);

if (a >= 3000){
    console.log('book');
}
else if (a >= 1000){
    console.log('mask');
}
else {
    console.log('no');
}