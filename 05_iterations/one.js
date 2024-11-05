// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`5 is best number`);
    }
    // console.log(element);
}

for (let i = 98; i <= 98; i++) {
    // console.log(`Table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop: ${j} and Outter loop: ${i}`);
        // console.log(`${i} * ${j} = ${i * j}`)
    }
}

const myArray = ["flash", "iron_man", "spider_man"];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`5 is deducted`)
//         break;
//     }
//     console.log(`Value of index is ${index}`);  
// }
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`5 is deducted`)
        continue;
    }
    console.log(`Value of index is ${index}`);  
}