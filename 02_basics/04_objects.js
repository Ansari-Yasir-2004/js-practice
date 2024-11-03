// const tinderUser = new Object();

const tinderUser = {}
tinderUser.id = 143;
tinderUser.name = "Yasir"
tinderUser.isLoggedIn = true;
// console.log(tinderUser);

const regularName = {
    fullName: {
        userName: {
            firstName: "Yasir",
            lastName: "Ansari",
        }
    }
}
// console.log(regularName.fullName.userName.lastName);

const obj_1 = {
    1: "a",
    2: "b",
}
const obj_2 = {
    3: "c",
    4: "d",
}
const obj_3 = {
    5: "e",
    6: "f",
}
// const allObj = {
//     obj_1,
//     obj_2,
// }

// const allObj = Object.assign({}, obj_1, obj_2, obj_3)

const allObj = {...obj_1, ...obj_2, ...obj_3}
// console.log(allObj);

const user = [
    {
        id: '8904',
        eMail: 'some@google.com',
    },
    {
        id: '8904',
        name: 'some@google.com',
    },
]
// console.log(user[1].name)

// console.log(tinderUser);
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('age'))
