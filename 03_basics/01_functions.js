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
console.log(userLoggedIn("Yasir"))