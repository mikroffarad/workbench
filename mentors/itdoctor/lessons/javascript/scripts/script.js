function guessTheNumber(num) {
  const guessed = Math.floor(Math.random() * 100);
  
  for (let attempts = 10; attempts >= 0; attempts--) {
    let variant = prompt(`Attempt №${attempts} Your Number`);
    let moreOrLess = variant > guessed ? "lower" : "more"
    if (variant != guessed) {
      console.log(`Try ${moreOrLess}. Attempts left: ${attempts}`)
    } else {
      return `You win. Random Number: ${guessed}. You had ${10-attempts} attempts to guess that`;
    }
  }
  console.log("You lose")
}

console.log(guessTheNumber());