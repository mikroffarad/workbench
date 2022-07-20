/*
    1. Make a button click — ?
        - Change color to: — ?
            - If color is red — make it green — ?
            - Otherwise, make it red — ?

1. Variables -
right_hand = "phone";
*/
// Selecting a button tag with the "button" class
button = document.querySelector("button");

// Assigning "Another text" value for innerText property. As a result — button's text has been changed.
button.innerText = "Another text"

// Assigning a green color (in hexidecimal value) for button's background
button.style.background = "#0f0"

// Selecting a div tag
square = document.querySelector("div")
// Assigning a green color (in hexidecimal value) for div tag
square.style.background = "#0f0"


// Info output:
console.dir(button)
