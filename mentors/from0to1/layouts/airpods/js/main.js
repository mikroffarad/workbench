const menuBurger = document.querySelector(".burger-menu");

menuBurger.addEventListener("click", () => {
    document.documentElement.classList.toggle("menu-open");
})