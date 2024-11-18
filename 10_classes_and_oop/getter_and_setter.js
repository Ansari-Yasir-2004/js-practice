class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(mail){
        this._email = mail.toUpperCase()
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(pass){
        this._password = pass.toUpperCase()
    }
}

const yasir = new User("y@google.ai", "abc");
console.log(yasir.email)