// const userName = "yasir@google.com";
// if (userName) {
//     console.log("got user email")
// }else {
//     console.log("don't have user email")
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("array is empty")
// }

// const emptyObject = {};
// if (Object.keys(emptyObject).length === 0) {
//     console.log("object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val_1;
// val_1 = 5 ?? 10;
// val_1 = null ?? 10
// val_1 = undefined ?? 10
val_1 = undefined ?? 10 ?? 20
// console.log(val_1)


//  Terniary Operator (?)
// condition ? true : false;

const price = 50;
price <= 80 ? console.log("price is less than 80") : console.log("price is more than 80")