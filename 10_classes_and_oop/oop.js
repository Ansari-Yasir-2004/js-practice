const user = {
    userName: 'yasir',
    loginCount: 5,
    loggedIn: true,
    getUserName: function(){
        // console.log(`Username: ${this.userName}`);
        console.log(this)
    }
}

// console.log(user.userName);
// console.log(user.getUserName());
// console.log(this);

function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // return this;
}
const userOne = new User("yasir", 15, true);
const userTwo = new User("ansari", 11, false);
console.log(userOne);
console.log(userTwo);