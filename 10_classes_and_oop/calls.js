function setUsername(username) {
    // complex DB calls
    this.username = username;
}

function createUser(username, email, password) {
    setUsername.call(this, username);
    this.email = email;
    this.password = password
}

const chai = new createUser("yasir", "yasir@google.com", "123");
console.log(chai)