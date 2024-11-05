// for os loop 

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//     console.log(num);
// }

// let greetings = "hello world !";
// for (const greet of greetings) {
//     if (greet == " ") {
//         continue;
//     }
//     console.log(`value of char is ${greet}`)
// }

//  Map 

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States Of America ');
map.set('FR', 'France');
map.set('IN', 'India');
// console.log(map)

for (const [key, value] of map) {
    console.log(`${key}: ${value}`)
}