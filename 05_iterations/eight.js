myNums = [1, 2, 3];

// const myTotal = myNums.reduce( function(acc, cv) {
//     console.log(`acc value: ${acc} and cv value: ${cv}`)
//     return acc + cv
// },0)

const myTotal = myNums.reduce((acc, cv) => acc + cv, 0);
// console.log(myTotal)

const shoppingCart = [
    {
        itemName: 'js course',
        itemPrice: 2999,
    },
    {
        itemName: 'py course',
        itemPrice: 999,
    },
    {
        itemName: 'c++ course',
        itemPrice: 1999,
    },
]

let total = shoppingCart.reduce( (acc, item) => acc + item.itemPrice, 0);
console.log(total)