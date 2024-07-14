const rectElement = document.querySelector(".rect");
const rgbTextValue = document.querySelector(".value-rgb");
const hexTextValue = document.querySelector(".value-hex");

function setColorForRect() {
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
setColorForRect();


document.querySelectorAll(".field__range").forEach(rangeElement => {
    rangeElement.addEventListener("change", (i) => {
        setColorForRect();
    })
})