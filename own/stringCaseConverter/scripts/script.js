let input = document.getElementById('input')

function displayOutput() {
  let inputValue = input.value;
  
  let weirdCaseString1 = "";
  let isUpperCase = true;

  for (let i = 0; i < inputValue.length; i++) {
    let char = inputValue.charAt(i);
    if(isUpperCase) {
      weirdCaseString1 += char.toUpperCase();
    } else {
      weirdCaseString1 += char.toLowerCase();
    }
    if (char !== " ") {
      isUpperCase = !isUpperCase;
    }
  }
  
  let weirdCaseString2 = weirdCaseString1.split('').map(c => {
    if (c === c.toUpperCase()) {
      return c.toLowerCase();
    } else {
      return c.toUpperCase();
      }
  }).join('');

  let output = document.querySelector(".output");

  output.innerHTML = `
    ${weirdCaseString1} 
    <br>
    ${weirdCaseString2}
  `;
}