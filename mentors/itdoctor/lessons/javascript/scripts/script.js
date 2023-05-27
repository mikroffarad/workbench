let arr = [47, 12, 85, 63, 29, 54, 91, 38, 77, 16, 42, 59, 88, 25, 73, 32, 66, 95, 19, 81, 92];

// for (i of arr) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

let arrNew = arr.filter(function (item) {
    if (item % 2 === 0) {
        return item
    }
})

console.log(arrNew.length)