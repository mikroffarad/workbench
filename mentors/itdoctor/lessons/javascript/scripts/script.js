// let human = {
//     name: "Anton",
//     age: 19,
//     introduceMyself() {
//         return `Hello, my name is ${this.name}, I'm ${this.age} years old`;
//     }
// }
// console.log(human.introduceMyself())

// let arr = [99,88,77,66,555,44,33,22,1111];
// let arrSorted = arr.sort((a,b) => a-b) 
// console.log(arrSorted)

// function fibonacci(count) {
//     let fib = [];
//     for (let i = 0; i < count; i++) {
//         if (i === 0) {
//             fib[i] = 1;
//         } else if (i === 1) {
//             fib[i] = 2;
//         } else {
//             fib[i] = fib[i-2] + fib[i-1]; 
//         }
//     }
//     return fib;
// }
// console.log(fibonacci(64))

// function factorial(n) {
//     let value = 1;
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     for(let i = 1; i <= n; i++) {
//         value *= i;
//     }
//     return value;
// }
// console.log(factorial(4))

// function sumNum(n) {
//     return n.toString().split('').map((i) => +i).forEach((value, index, array) => array[index] = 5);
// }
//
// console.log(sumNum(65536))