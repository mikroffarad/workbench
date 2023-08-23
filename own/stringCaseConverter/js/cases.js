function excludeNonAlphanumeric(string) {
  var excludedChars = '';

  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);

    if (char === char.toUpperCase() && char === char.toLowerCase() && char !== ' ' && isNaN(char)) {
      excludedChars += char;
    }
  }

  var cleanedString = string.replace(new RegExp('[' + excludedChars + ']', 'g'), '');

  return cleanedString.split(" ");
}

const casesArray = [
  {
    caseName: "WeirdCase 1",
    caseMethod(inputValue) {

      let output = "";
      let isUpperCase = true;

      for (let i = 0; i < inputValue.length; i++) {
        let char = inputValue.charAt(i);
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
  {
    caseName: "WeirdCase 2",
    caseMethod(inputValue) {
      const weirdCasePrevious = casesArray.find(obj => obj.caseName === "WeirdCase 1");
      return weirdCasePrevious.caseMethod(inputValue).split("").map(function(char) {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      }).join("");
    }
  },
  {
    caseName: "camelCase",
    caseMethod(inputValue) {
      return excludeNonAlphanumeric(inputValue).map(function(word, index) {
        if (index === 0) {
          return word.toLowerCase();
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      }).join("");;
    }
  },
  {
    caseName: "snake_case",
    caseMethod(inputValue) {
      return excludeNonAlphanumeric(inputValue).map(function(word) {
        return word.toLowerCase();
      }).join('_').replace(/_+/g, '_');
    }
  },
]