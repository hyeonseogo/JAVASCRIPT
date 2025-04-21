class User {
  #password = "";

  constructor(userid, password) {
    this.userid = userid;
    this.#password = password;
  }

  checkPassword(input) {
    return this.#password === input;
  }
}

const user = new User("apple", "1111");

console.log(user.userid);
console.log(user.checkPassword("1111"));
console.log(user.checkPassword("abcd"));
// console.log(user.#password);

user.password = "1234";
console.log(user.password);
