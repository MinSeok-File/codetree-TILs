const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let a = Number(input);

if (a == 1){
    console.log('John');
}
else if (a == 2){
    consoel.log('Tom');
}
else if (a == 3){
    console.log('Paul');
}
else {
    console.log('Vacancy');
}