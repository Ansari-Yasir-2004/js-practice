const promiseOne = new Promise(function(resolve,reject){
    // Do not async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("async task is completed");
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("promised consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("async 2 resolved")
})

let promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "yasir", email: "yasir@google.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user)
})

let promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let errror = false;
        if (!errror) {
            resolve({userName: "yasir", password: "123"})
        } else {
            reject("ERROR: something is wrong")
        }
    }, 1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.userName;
}).then((userName) => {
    console.log(userName)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("promise is either resolved or rejected"))