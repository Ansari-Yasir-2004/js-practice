const User = {
    _email: "yasir@g.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(mail){
        this._email = mail
    }
}

const tea = Object.create(User);
console.log(tea.email)