class Accont {
  #password;
  #balance = 0;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }
  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: "modena3d@gmail.com",
  password: "123456",
};

const myAccont = new Accont(user);

console.log(myAccont.getBalance(user.email, user.password));

// myAccont.balance = 9999;
// myAccont.password = "okokok";
console.log(myAccont);
console.log(user);
