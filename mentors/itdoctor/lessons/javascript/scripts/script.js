'use strict'

// Init array
let arr1 = [3, 2, "str", true]
console.log(arr1)

// Clear first item
arr1.shift()
console.log(arr1)

// Push item to the end
arr1.push(128)
console.log(arr1)

// Clear last item
arr1.pop()
console.log(arr1)

// Push item to the beginning
arr1.unshift(256)
console.log(arr1)

// Concat with another array
let arr2 = [4, 5, 6]
console.log([arr1.concat(arr2)])

// Find item by index
console.log(arr1.indexOf(true))

// Convert array to string
console.log(arr1.join()) // comma-separated items
console.log(arr1.join("")) // without separator 

// Edit array
arr1.splice(1, 3,  "str1", "str2")
console.log(arr1)

// String to array
console.log("Major, Minor, Mixolydian".split(", "))