// primitive

// 7 types : string, number, boolean, BigInt, null, undefined, symbol

// reference (non-primitive)

const name = "yasir"
const age = 20
const number = BigInt(155635841585544468343)
const numberVal = 155635841585544468343n
const isLoggedIn = true
let emailId;
const outsideTemp = null
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log( id === anotherId);
// console.log( id == anotherId);


// console.log(typeof id);

// array, object, function

const games = ["freefire", "pubg", "callofduty"]

const myObj = {
    name : "yasir",
    age : 20,
    emailId: undefined
}

const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof myFunction);
// console.log(myFunction());


//-------------------------------------------

//  stackk (primitive) and heap (non-primitive)

let myName = "yasir"
let anotherName = myName
anotherName = "ansari yaisr"

// console.log(myName);
// console.log(anotherName);

let userOne = {
    name: "yasir",
    age: 20
}
let userTwo = userOne
userTwo.name = "ansari yasir"

console.log(userOne.name);
console.log(userTwo.name);
