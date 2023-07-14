// Destructuring_assignment
const [userName, fullName, email] = ["mikroffarad", "Victor Zaritsky", "viktorzarickiy@gmail.com"];

function Person() {
  this.age = 0;

  // setInterval(() => {
  //   this.age++;
  //   console.log(this.age);
  // }, 1000)
}

const p1 = new Person();

// Binary System
let binValue = 0b101; // 5
// Octal System
let octValue = 0o16; // 14

console.log(Math.hypot(3, 4)); // Egyptian triangle

// Array methods

const arr = [16, "a", true, NaN];
console.log(...arr.entries());
console.log(...arr.keys());
console.log(...arr.values());

// Remove duplicate items

const dupArr = [1, 3, 5, 9, 5, 3, 1]
const setArr = [...new Set(dupArr)]