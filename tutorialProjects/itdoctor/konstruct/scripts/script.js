const menuBurger = document.querySelector(".menu-burger");

menuBurger.addEventListener("click", () => {
    document.documentElement.classList.toggle("menu-opened");
});