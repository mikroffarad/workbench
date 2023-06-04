let a = new Date(2004, 09, 05, 10, 00, 00);
console.log(a);
console.log(a.toDateString());
let options = {
  era: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timezone: "UTC",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
}

document.write(`I was born in ${a.toLocaleString("en", options)}`);
