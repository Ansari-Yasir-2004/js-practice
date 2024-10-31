let score = 100
let newScore = new Number(10.59955)

// console.log(score);
// console.log(newScore);

// console.log(newScore.toString().length);
// console.log(newScore.toFixed(2));

const othNum = 123.6235
console.log(othNum.toPrecision(5));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-in'));


// ---------------Maths-------------------

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)