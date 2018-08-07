// constructor function is a function that allows you create an object from a class

// a user constructor function
function User(firstName: string, lastName: string, age: number, gender: number) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

const user1 = new User('Jo', 'Choi', 28, 1);
console.log(user1);
console.log(`Name of user1 is ${user1.firstName} ${user1.lastName}`);

// prototype object
User.prototype.emailDomain = '@jochoi.com';

console.log(user1.emailDomain);
console.log(user1.__proto__);

User.prototype.getFullName = function (): string {
  return `${this.firstName} ${this.lastName}`;
};

console.log(user1.getFullName());