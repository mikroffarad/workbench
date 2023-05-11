const str = "Hi there";

// Displays number of characters in the string
console.log(str.length);

// Displays the last char
console.log(str[str.length - 1]);

// Displays chars from 1 to 3 index
console.log(str.slice(1, 3));

// Converts string to lowercase
console.log(str.toLowerCase());

// Converts string to uppercase
console.log(str.toUpperCase());

// trim method clears spaces in beginning and end of string
const format = "    uNcoRRect STring   ".toLowerCase().trim();

const sentence = `${format[0].toUpperCase() + format.slice(1)}`;

console.log(sentence);

console.log(7 == "7")
console.log(7 === "7")