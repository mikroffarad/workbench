let prevX = null;
let prevY = null;
let isLeftMouseButtonPressed = false;

const wrapperNode = document.querySelector(".wrapper");

wrapperNode.addEventListener("mousemove", (evt) => {
    const currentX = evt.clientX;
    const currentY = evt.clientY;

    if ((prevX !== null && prevY !== null) && isLeftMouseButtonPressed === false) {
        if (getDistance(prevX, prevY, currentX, currentY) >= 20) {
            createStar()
            console.log(isLeftMouseButtonPressed);
        }
    } else {
        if (isLeftMouseButtonPressed !== true) {
            createStar()
        }
    }

    function createStar() {
        const dot = document.createElement("div");
        dot.className = "dot fa-solid fa-star";

        dot.style.left = `${currentX}px`;
        dot.style.top = `${currentY}px`;
        wrapperNode.appendChild(dot);

        setTimeout(() => {
            wrapperNode.removeChild(dot)
        }, 1500)

        prevX = currentX;
        prevY = currentY;
    }
})

wrapperNode.addEventListener("mousedown", (evt) => {
    if (evt.button === 0) {
        isLeftMouseButtonPressed = true
        console.log("pressed");
    }
})

wrapperNode.addEventListener("mouseup", (evt) => {
    if (evt.button === 0) {
        isLeftMouseButtonPressed = false;
        console.log("released");
    }
})

wrapperNode.addEventListener("contextmenu", (evt) => {
    evt.preventDefault();
    wrapperNode.innerHTML = ""
})

function getDistance(prevX, prevY, currentX, currentY) {
    return Math.sqrt(Math.pow(currentX - prevX, 2) + Math.pow(currentY - prevY, 2));
}
