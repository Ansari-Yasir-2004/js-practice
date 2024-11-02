//  singleton
// Object.create

// object literals
const mySym = Symbol(key1)

const jsUser = {
    name: "yasir",
    "full Name": "yasir ansari",
    [mySym]: "key1",
    age: 20,
    location: "maharashtra",
    email: "yasir@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"] 
}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);
console.log(jsUser[mySym]);
