<<<<<<< HEAD
let colors = [
  {
  "colorname": "hotpink",
  "hexcode": "#4B0082",
  "rgbcode": "rgb(75, 0, 130)"
  },
  {
  "colorname": "Crimson",
  "hexcode": "#DC143C",
  "rgbcode": "rgb(75, 0, 130)"
  },
  {
  "colorname": "Aqua",
  "hexcode": "#00FFFF",
  "rgbcode": "rgb(0, 255, 255)"
  }
]
=======
let people = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith"
    },
    {
        id: 3,
        firstName: "David",
        lastName: "Johnson"
    },
    {
        id: 4,
        firstName: "Emily",
        lastName: "Williams"
    },
    {
        id: 5,
        firstName: "David",
        lastName: "Brown"
    },
    {
        id: 6,
        firstName: "Olivia",
        lastName: "Davis"
    },
    {
        id: 7,
        firstName: "James",
        lastName: "Miller"
    },
    {
        id: 8,
        firstName: "Sophia",
        lastName: "Wilson"
    }
];

let peopleFind = people.filter(function (item) {
    if(item.firstName === "David") {
        return item;
    }
})
peopleFind.forEach(function (item, i) {
    console.log(`${item.firstName} ${item.lastName}`)
})

let arr = [
    42,
    "Hello, World!",
    true,
    null,
    undefined,
    { name: "John" },
    [1, 2, 3],
    function() {
        return "I am a function!";
    },
    new Date(),
    /pattern/,
    Symbol("unique"),
    BigInt(123456789),
    document.createElement("div"),
    new Map(),
    new Set()
];

let improvedArr = arr.map(function (item, i) {
        if (typeof(item) === "object") {
            return item
        }
    }
)

console.log(improvedArr)
>>>>>>> a01a23c48e2047318441e7cce107a96f0e72cbfe
