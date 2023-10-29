// export const generateRange = () => {
//     const arr = [];
//     let count = 0;
//     while (count < 1) {
//         arr[arr.length] = (count + 0.01).toFixed(2);
//         count += 0.01;
//     }
//     return arr;
// }

export const generateTreshold = () => {
    const arr = []

    for(let i = 0.01; i < 1; i += 0.01) {
        arr.push(Number(i.toFixed(2)));
    }

    return arr;
}