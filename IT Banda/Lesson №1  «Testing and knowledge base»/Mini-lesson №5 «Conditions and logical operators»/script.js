/*
    1. Make a button click — ?
        - Change color to: — know it
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
// Assigning a red color for div tag
square.style.background = "green"


// Info output:
console.dir(button)


/*

if(square is red) {
    make something
}


if(condition) {
    // Action 1
    // Action 2
} else {

}
*/
// Theres 2 possible conditions: the square is red OR there's a void value
if(square.style.background == "red" || square.style.background == "") {
// If one of them is right — assign "green" value for background property (make square green)
    square.style.background = "green"
}
// If none of them are true — make square red
else {
    square.style.background = "red"
}
