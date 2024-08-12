function excludeSpecialCharacters(string) {
  var excludedChars = '';

  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i);

    if (char === char.toUpperCase() && char === char.toLowerCase() && char !== ' ' && isNaN(char)) {
      excludedChars += char;
    }
  }

  var cleanedString = string.replace(new RegExp('[' + excludedChars + ']', 'g'), '');

  return cleanedString.split(" ").join(" ");
}

function findCase(caseName) {
  return casesArray.find(obj => obj.caseName === caseName);
}

function capitalizeAfterHyphen(str) {
  const words = str.split('-');
  const capitalizedWords = words.map((word, index) => {
    if (index > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  });
  return capitalizedWords.join('-');
}

const casesArray = [
  {
    caseName: "WeIrDcAsE",
    caseMethod(inputValue) {

      let output = "";
      let isUpperCase = true;

      for (let i = 0; i < inputValue.length; i++) {
        let char = inputValue.charAt(i);
        if (isUpperCase) {
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
    caseName: "wEiRdCaSe",
    caseMethod(inputValue) {
      return findCase("WeIrDcAsE").caseMethod(inputValue).split("").map(function (char) {
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
      return inputValue.split(' ').map(excludeSpecialCharacters).map(function (word, index) {
        if (index === 0) {
          return word.toLowerCase();
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      }).join("");
    }
  },
  {
    caseName: "snake_case",
    caseMethod(inputValue) {
      return inputValue.split(' ').map(excludeSpecialCharacters).map(function (word) {
        return word.toLowerCase();
      }).join('_').replace(/_+/g, '_');
    }
  },
  {
    caseName: "kebab-case",
    caseMethod(inputValue) {
      return findCase("snake_case").caseMethod(inputValue).replace(/_/g, "-");
    }
  },
  {
    caseName: "PascalCase",
    caseMethod(inputValue) {
      return findCase("camelCase").caseMethod(inputValue).split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
  },
  {
    caseName: "MACRO_CASE",
    caseMethod(inputValue) {
      return findCase("snake_case").caseMethod(inputValue).toUpperCase();
    }
  },
  {
    caseName: "Train-Case",
    caseMethod(inputValue) {
      return findCase("kebab-case").caseMethod(inputValue).split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).map(capitalizeAfterHyphen).join(' ');
    }
  },
];