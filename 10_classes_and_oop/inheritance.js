class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const yasir = new teacher("yasir", "yasir@google.com", "123");
// console.log(yasir.addCourse())
// yasir.addCourse()

const masalaChai = new User("masalaChai");
yasir.logMe();

console.log(yasir instanceof User)