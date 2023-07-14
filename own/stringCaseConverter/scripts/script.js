let textarea = document.querySelector('.footer__textarea')

function displayOutput() {
  let textareaValue = textarea.value;
  
  let weirdCaseString1 = "";
  let isUpperCase = true;

  for (let i = 0; i < textareaValue.length; i++) {
    let char = textareaValue.charAt(i);
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

  let output = document.querySelector(".main");

  output.innerHTML = `
    <p style="margin-bottom: 15px;">${weirdCaseString1}</p>
    <br>
    <p>${weirdCaseString2}</p>
  `;
}