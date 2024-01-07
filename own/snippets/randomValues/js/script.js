for (let i = 0; i <= 500; i++) {
    const blockNode = document.createElement("div");
    blockNode.classList.add("block")
    document.querySelector(".wrapper").appendChild(blockNode)
}

document.querySelector(".wrapper").addEventListener("mousemove", () => {
    document.querySelectorAll(".block").forEach((blockNode) => {
        blockNode.textContent = generateRandomHexColor(); 1
    })
})

function generateRandomHexColor() {
    // Generate random value for red, green, and blue
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Convert decimal to hex and ensure two digits for each color
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');

    // Concatenate the values to create a hex color code
    const hexColor = `#${redHex}${greenHex}${blueHex}`;

    return hexColor;
}
