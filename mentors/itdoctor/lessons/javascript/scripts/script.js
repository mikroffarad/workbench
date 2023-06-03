let a = Date.now(new Date());

// console.log(Date.parse(a));
// console.log(a.getMilliseconds());
// a.setFullYear(a.getFullYear() + 4);
// console.log(a);

for (let i = 0; i < 100; i++) {
  console.log(0);
}

let b = Date.now(new Date());
console.log(b-a);