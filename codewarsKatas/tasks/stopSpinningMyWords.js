function spinWords(string){
  stringsArr = string.split(" ");
  newArr = []
  for (i of stringsArr) {
    switch (true) {
      case (i.length >= 5):
        let reversed = '';
        for (let j = i.length - 1; j >= 0; j--) {
          reversed += i[j];
        }
        newArr.push(reversed)
        break
      default:
        newArr.push(i)
        break
    }
  }
  return newArr.join(' ');
}

console.log(spinWords("Hey fellow warriors"));