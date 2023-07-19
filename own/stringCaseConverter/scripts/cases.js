const casesArray = [
  {
    caseName: "WeirdCase 1",
    caseMethod(textareaValue) {

      let output = "";
      let isUpperCase = true;

      for (let i = 0; i < textareaValue.length; i++) {
        let char = textareaValue.charAt(i);
        if(isUpperCase) {
          output += char.toUpperCase();
        } else {
          output += char.toLowerCase();
        }
        if (char !== " ") {
          isUpperCase = !isUpperCase;
        }
      }
      return output;
    }
  },
  // {
  //   caseName: "WeirdCase 2",
  //   caseMethod() {
  //     const weirdCasePrevious = casesArray.find(obj => obj.caseName === "WeirdCase 1");
  //     // return [casesArray.caseName = ""].split('').map(c => {
  //     //   if (c === c.toUpperCase()) {
  //     //     return c.toLowerCase();
  //     //   } else {
  //     //     return c.toUpperCase();
  //     //     }
  //     // }).join('');
  //     return weirdCasePrevious.caseName;
  //   }
  // }
  {
    caseName: "snake_case",
    caseMethod(textareaValue) {
      return textareaValue.replace(" ", "_")
    }
  }
]