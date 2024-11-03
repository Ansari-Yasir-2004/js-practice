const user = {
    userName: 'Yasir',
    price: 5000,

    welcomeMessage: function() {
        console.log(`${this.userName} , welcome to website`);
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.userName = "Ansari"
// user.welcomeMessage()
// console.log(this)

// function chai() {
//     const userName = 'yasir';
//     console.log(this.userName)
// }
// chai()

// const chai = function () {
//     let userName = 'yasir';
//     console.log(this.userName)
// }
// chai()

// const chai = () => {
//     let userName = "yasir"
//     console.log(this.userName)
// }
// chai()

// const addTwo = (num_1, num_2) => {
//     return num_1 + num_2;
// }
// const addTwo = (num_1, num_2) => num_1 + num_2
// const addTwo = (num_1, num_2) => (num_1 + num_2)
const addTwo = (num_1, num_2) => ({userName: "Yasir"})
console.log(addTwo(9, 3))