// Template strings ``
console.log(`Text
on 5 lines ${5 + 7}.`)

// Math object and its methods
oneDecimal = 3.5
console.log(
`${Math.floor(oneDecimal)}
${Math.ceil(oneDecimal)}
${Math.round(oneDecimal)}
${Math.trunc(oneDecimal)}
`)

// Round to fixed decimal
threeDecimal = 7.567;
console.log(threeDecimal.toFixed(2));

// Convert string to number
const add = "5";
console.log(+add + 5);

// Function to check the number
function isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}
console.log(isNumber("5"))

// Function to generate random integer
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
console.log(randomInteger(5, 50))