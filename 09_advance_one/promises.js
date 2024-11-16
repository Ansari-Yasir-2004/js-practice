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