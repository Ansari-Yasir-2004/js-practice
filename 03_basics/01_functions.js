function sayMyName() {
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("I");
    console.log("R");
}
// sayMyName()

// function addTwoNumbers(number_1, number_2) {
//     console.log(number_1 + number_2)
// }
// addTwoNumbers(164560, 5406430); 
// addTwoNumbers(76, "8");
// addTwoNumbers(98, "q");
// addTwoNumbers(56, null);

// function addTwoNumbers(number_1, number_2) {
//     console.log(number_1 + number_2);
// }
// addTwoNumbers(3, 3);
// let result = addTwoNumbers(3, 4);
// console.log(result)

function addTwoNumbers(number_1, number_2) {
    // let result = number_1 + number_2;
    // console.log(result)
    return number_1 + number_2;
}
// const result = addTwoNumbers(3, 2);
// console.log(`Result is: ${result}`)

function userLoggedIn(userName) {
    if (userName === undefined) {
        console.log("Please enter a user name");
        return;
    }
    return `${userName} just logged in`;
}
// console.log(userLoggedIn("Yasir"))

function calculateCartPrice(...num_1) {
    return num_1;
}
// console.log(calculateCartPrice(100, 200, 300, 1000));

// const user = {
//     userName: "Yasir",
//     price: 299,
// }
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}
// handleObject({
//     userName: "Ansari",
//     price: 599
// });

const myNewArray = [100, 200, 300, 400]
function returnSecondValue(anyArray) {
    return anyArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300]))