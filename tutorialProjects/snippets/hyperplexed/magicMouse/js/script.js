let prevX = null;
let prevY = null;
let isLeftMouseButtonPressed = false;

const wrapperNode = document.querySelector(".wrapper");
const colorsArr = ["#2563eb", "#a855f7", "#e11d48", "#16a34a"]
const animationsArr = ["fall-1", "fall-2", "fall-3"]
const countNode = document.getElementById("count")

wrapperNode.addEventListener("mousemove", (evt) => {
    const currentX = evt.clientX;
    const currentY = evt.clientY;

    if ((prevX !== null && prevY !== null) && isLeftMouseButtonPressed === false) {
        if (getDistance(prevX, prevY, currentX, currentY) >= 50) {
            createStar();
        }
    } else {
        if (isLeftMouseButtonPressed !== true) {
            createStar()
        }
    }

    createGlow(prevX, prevY, currentX, currentY);
    countNode.innerHTML = document.querySelectorAll(".star").length;

    function createStar() {
        const star = document.createElement("div");
        star.className = "star fa-solid fa-star";

        star.style.left = `${currentX}px`;
        star.style.top = `${currentY}px`;
        star.style.color = getRandom(colorsArr);
        star.style.animationName = getRandom(animationsArr);

        wrapperNode.appendChild(star);

        setTimeout(() => {
            wrapperNode.removeChild(star)
        }, 1500)

        prevX = currentX;
        prevY = currentY;
    }

    function createGlow(prevX, prevY, currentX, currentY) {
        const distance = getDistance(prevX, prevY, currentX, currentY),
            quantity = Math.max(
                Math.floor(distance / 100),
                1
            );
        const dx = (currentX - prevY) / quantity,
            dy = (currentY - prevY) / quantity;

        Array.from(Array(quantity)).forEach((_, index) => {
            const x = prevX + dx * index,
                y = prevY + dy * index;

            createGlowPoint(x, y);
        });
    }

    function createGlowPoint(posX, posY) {
        const glow = document.createElement("div");

        glow.className = "dot";

        glow.style.left = `${posX}px`;
        glow.style.top = `${posY}px`;

        wrapperNode.appendChild(glow)
        setTimeout(() => {
            wrapperNode.removeChild(glow)
        }, 400)
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

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
