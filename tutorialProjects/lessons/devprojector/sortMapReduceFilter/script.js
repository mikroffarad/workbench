const arrayOfNumbers = [1, 5, 10, 20, 256];
/**
 * Map
 */
const arrayOfNumbersTripled = arrayOfNumbers.map((item) => {
    return item * 3;
})

// console.log(arrayOfNumbersTripled);

/**
 * Reduce
 */
const arrayOfNumbersSum = arrayOfNumbers.reduce((accumulator, currentValue) => {
    console.log(`${accumulator} + ${currentValue}`);
    return accumulator + currentValue;
})

// console.log(arrayOfNumbersSum)

/**
 * Reduce
 */
const arrayOfNumbersOdd = arrayOfNumbers.filter((number) => {
    return number % 2 !== 0;
})

// console.log(arrayOfNumbersOdd)

/**
 * Sort
 */
// Extended
arrayOfNumbers.sort((firstItem, secondItem) => {
    if (firstItem > secondItem) {
        return 1;
    } else if (firstItem < secondItem) {
        return -1;
    }
    return 0;
})
console.log(arrayOfNumbers);
// Simplified
arrayOfNumbers.sort((firstItem, secondItem) => {
    return firstItem - secondItem;
})

console.log(arrayOfNumbers);
