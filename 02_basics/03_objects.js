//  singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "yasir",
    "full Name": "yasir ansari",
    [mySym]: "mykey1",
    age: 20,
    location: "maharashtra",
    email: "yasir@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"],
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(typeof jsUser[mySym]);

jsUser.age = 21
// Object.freeze(jsUser)
jsUser.age = 22
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("hello Js user");
}
console.log(jsUser.greeting());
jsUser.greetingTwo = function() {
    console.log(`Hello Js User and ${this["full Name"]}`)
}
console.log(jsUser.greetingTwo());
