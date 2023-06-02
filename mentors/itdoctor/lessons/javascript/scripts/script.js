function guessTheNumber(num) {
  const guessed = Math.floor(Math.random() * 100);
  
  for (let attempts = 1; attempts <= 10; attempts++) {
    let variant = prompt(`Attempt №${attempts} Your Number`);
    let moreOrLess = variant > guessed ? "lower" : "more"
    switch (true) {
      case variant != guessed && attempts === 10:
        return alert(`You lose. Guessed number: ${guessed}`);
        break;
      case variant != guessed:
        alert(`${guessed} Try ${moreOrLess}. Attempts left: ${10 - attempts}`);
        break;
      default:
        return alert(`You win. Random Number: ${guessed}. You had ${attempts} attempts to guess that`);
        break;
    }
  }
}
guessTheNumber()