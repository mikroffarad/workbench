const formStarter = document.querySelector(".form__starter");
const formContent = document.querySelector(".form__content");
const formTitle = document.querySelector(".form__title");
const formTextFake = document.querySelector(".form__text-fake");
const formText = document.querySelector(".form__text");

// Show note adding form
formStarter.onclick = () => {
    formStarter.hidden = "true";
    formContent.removeAttribute("hidden");
    formTitle.focus();
}

// Focus transition from title to text
formTitle.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        formText.focus();
    }
})

// Hiding/Showing textFake label
formText.addEventListener("input", () => {
    formText.innerText !== "" ? formTextFake.hidden = true : formTextFake.removeAttribute("hidden");
})