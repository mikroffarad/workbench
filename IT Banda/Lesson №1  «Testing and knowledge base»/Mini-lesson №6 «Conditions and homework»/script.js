// Initializing square element, using div tag with ".square" class
square = document.querySelector('.square')
console.dir(square)
// Initializing button which using for square's size changing
size = document.querySelector(".size")
console.dir(size)
// Initializing button which using for square's color changing
color = document.querySelector(".color")
console.dir(color)
// Initializing button which using for square's shape changing
shape = document.querySelector(".shape")
console.dir(shape)
// Event which describes actions on clicking "Change size"
size.onclick = function() {
    /* Condition which means:
    if (square 100x100) {
        change to square 400x400
    } otherwise {
        change to square 100x100
        shift buttons by 100px to the left
    }
    */
    if (square.style.width == "100px" && square.style.height == "100px") {
        square.style.width = "400px"
        square.style.height = "400px"
    } else {
        square.style.width = "100px"
        square.style.height = "100px"
        size.style.marginLeft = "100px"
    }
}
// Event which describes actions on clicking "Change color"
color.onclick = function() {
    // Shift button section to 100px down
    size.style.marginTop = "100px"
    /* Condition which means:
    if (square 100x100) {
        change to square 400x400
    } otherwise {
        change to square 100x100
        shift buttons by 100px to the left
    }
    */
    if (square.style.background == "" || square.style.background == "yellow") {
        square.style.background = "blue"
    } else {
        square.style.background = "yellow"
    }
}
// Event which describes actions on clicking "Change shape"
shape.onclick = function() {
    /* Bunch of conditions which mean:
    if (color: blue) {
        border-radius: 0; — right angles (i.e. square)
    }
    if (color: yellow) {
        border-radius: 50%; — rounded corners (i.e. circle)
    }
    */
    if (square.style.background == "blue") {
        square.style.borderRadius = "0"
    }
    if (square.style.background == "yellow") {
        square.style.borderRadius = "50%"
    }
}