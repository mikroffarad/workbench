const inputNode = document.getElementById('input');
const listNode = document.querySelector(".main__list");
const greetingNode = document.querySelector(".main__greeting");
const hintNode = document.querySelector(".header__hint");


for (let caseItem of casesArray) {
  let itemNode = document.createElement("li");
  itemNode.className = "main__item item";
  itemNode.innerHTML = `
  <h2 class="item__key">${caseItem.caseName}</h2>
  <span class="item__value" onclick="copyText(this)"></span>
  `;
  listNode.appendChild(itemNode);
}

const itemValueArr = document.querySelectorAll(".item__value");

function echoValue() {
  if (inputNode.value.length >= 1) {
    greetingNode.hidden = true;
    listNode.hidden = false;
    hintNode.hidden = false;
  } else {
    greetingNode.hidden = false;
    listNode.hidden = true;
    hintNode.hidden = true;
  }

  for (let i = 0; i < itemValueArr.length; i++) {
    itemValueArr[i].textContent = casesArray[i].caseMethod(inputNode.value);
  }
}


function copyText(element) {
  var text = element.textContent;
  var tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  const hintNodeTextOriginal = hintNode.textContent;

  hintNode.textContent = 'Text copied to clipboard';
    setTimeout(function () {
      hintNode.textContent = hintNodeTextOriginal;
  }, 500);


  // navigator.clipboard.writeText(event.target.textContent).then(function () {

  //   const hintNodeTextOriginal = hintNode.textContent;

  //   hintNode.textContent = 'Text copied to clipboard';
  //     setTimeout(function () {
  //       hintNode.textContent = hintNodeTextOriginal;
  //     }, 500);

  // }, function () {
  //   console.error('Error copying text to clipboard');
  // });

};