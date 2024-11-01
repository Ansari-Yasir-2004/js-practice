// Datess

let myDate = new Date()
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2005, 3, 6)
// let myCreatedDate = new Date(2004, 3, 19, 11, 54)
// let myCreatedDate = new Date("2004-04-19")
let myCreatedDate = new Date("04-19-2004")
// console.log(myCreatedDate.toLocaleString());

let myTimesStamp = Date.now 
// console.log(myTimesStamp());
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate.toLocaleDateString('default', {
    timeZone: "GMT+5:30",
}));
