const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let height = Number(input[0]) / 100;
let weight = Number(input[1]);

let bmi = parseInt(weight / (height ** 2));

console.log(bmi);
if (bmi >= 25) {
    console.log('Obesity');
}