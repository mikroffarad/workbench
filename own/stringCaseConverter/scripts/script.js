let textarea = document.querySelector('.footer__textarea')

let casesList = document.querySelector('.cases-list');

let introText = document.querySelector('.main__text')

for(let caseItem of casesArray) {
  let textareaValue = textarea.value;
  let caseNode = document.createElement("li");
  caseNode.className = "cases-list__item";
  caseNode.innerHTML = `
    <h2 class="cases-list__title">
      ${caseItem.caseName}:
    </h2>
    <span class="cases-list__text"></span>
  `;
  casesList.appendChild(caseNode);
}

function displayOutput() {
  let isNoneInput = textarea.value === "" || textarea.value === null;    
  if (isNoneInput === true) {
    casesList.hidden = true;
    introText.hidden = false;
  } else {
    casesList.hidden = false;
    introText.hidden = true;
  }

  let casesText = document.querySelectorAll(".cases-list__text")

  for (let i = 0; i < casesText.length; i++) {
    casesText[i].textContent = `${casesArray[i].caseMethod(textarea.value)}`;
  }
}