const menuBurger = document.querySelector(".burger-menu");

menuBurger.addEventListener("click", () => {
    document.documentElement.classList.toggle("menu-open");
})

const chooseColor = document.querySelectorAll(".choose-color__button");
const contentItem = document.querySelectorAll(".content-item");

chooseColor.forEach(function (element) {
    element.addEventListener("click", changeImages);
}
)

function changeImages(event) {
    const target = event.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);
    const headerNode = document.querySelector(".header__images");
    

    chooseColor.forEach(function (item) {
        item.classList.remove("choose-color__button--active");
    })

    target.classList.add("choose-color__button--active");

    contentItem.forEach(function (item) {
        item.classList.remove("content-item--active")
    })

    contentActive.forEach(function (item) {
        item.classList.add("content-item--active");
    })

    headerNode.classList.forEach(function(item) {
        if (item.includes("--")) {
            headerNode.classList.remove(item)
        }
    })

    headerNode.classList.add(button);
}