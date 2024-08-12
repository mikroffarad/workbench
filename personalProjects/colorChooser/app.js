const rectElement = document.querySelector(".rect");
const rgbTextValue = document.querySelector(".value-rgb");
const hexTextValue = document.querySelector(".value-hex");

function setColorAndValues() {
    const redValue = document.querySelector(".range--red").value;
    const greenValue = document.querySelector(".range--green").value;
    const blueValue = document.querySelector(".range--blue").value;
    const redValueHex = Number(redValue).toString(16);
    const greenValueHex = Number(greenValue).toString(16);
    const blueValueHex = Number(blueValue).toString(16);

    const rectElementBackgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    rectElement.style.backgroundColor = rectElementBackgroundColor;
    rgbTextValue.innerHTML = rectElementBackgroundColor;
    hexTextValue.innerHTML = `#${redValueHex}${greenValueHex}${blueValueHex}`;
}
setColorAndValues();

document.querySelectorAll(".field__range").forEach(rangeElement => {
    rangeElement.addEventListener("change", (i) => {
        setColorAndValues();
    })
})

// Copy to clipboard (Clipboard API check) 
document.querySelectorAll(".values__item").forEach(value => {
    value.addEventListener("click", () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(value.innerHTML).then(() => {
                console.log('Text copied to clipboard successfully!');
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        } else {
            // Fallback для браузерів, які не підтримують clipboard API
            const textArea = document.createElement('textarea');
            textArea.value = value.innerHTML;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                console.log('Fallback: Text copied to clipboard successfully!');
            } catch (err) {
                console.error('Fallback: Failed to copy text: ', err);
            }
            document.body.removeChild(textArea);
        }
    });
});


document.querySelector(".button-random").addEventListener("click", () => {
    let redRange = document.querySelector(".range--red");
    let greenRange = document.querySelector(".range--green");
    let blueRange = document.querySelector(".range--blue");

    redValue = Math.round(Math.random() * 255);
    greenValue = Math.round(Math.random() * 255);
    blueValue = Math.round(Math.random() * 255);

    redRange.value = redValue;
    greenRange.value = greenValue;
    blueRange.value = blueValue;

    const redValueHex = Number(redValue).toString(16).padStart(2, '0');
    const greenValueHex = Number(greenValue).toString(16).padStart(2, '0');
    const blueValueHex = Number(blueValue).toString(16).padStart(2, '0');

    const rectElementBackgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    rectElement.style.backgroundColor = rectElementBackgroundColor;

    rgbTextValue.innerHTML = rectElementBackgroundColor;
    hexTextValue.innerHTML = `#${redValueHex}${greenValueHex}${blueValueHex}`;
})

document.querySelector(".header__button").addEventListener("click", () => {
    document.querySelector(".wrapper").classList.toggle("dark");
})

document.querySelectorAll(".values__item").forEach(value => {
    value.addEventListener("mouseenter", () => {
        document.querySelector(".hint").style.visibility = "visible";
    })
    value.addEventListener("mouseleave", () => {
        document.querySelector(".hint").style.visibility = "hidden";
        document.querySelector(".hint").innerHTML = "Click to copy";
    })
    value.addEventListener("click", () => {
        document.querySelector(".hint").innerHTML = "Copied!";
        setTimeout(() => {
            document.querySelector(".hint").innerHTML = "Click to copy";
        }, 1000)
        // document.querySelector(".hint").innerHTML = "Click to copy";
    })
})