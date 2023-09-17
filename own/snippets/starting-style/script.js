const buttonCreate = document.getElementById("button-create");
const buttonRemove = document.getElementById("button-remove");
const listNode = document.querySelector(".main__list");

buttonCreate.addEventListener("click", () => createItem());
buttonRemove.addEventListener("click", () => removeAllItems());

let i = 1;

const createItem = () => {
    listNode.classList.remove("main__list--cleared")
    const itemNode = document.createElement("li");
    itemNode.className = "main__item";
    itemNode.innerHTML = i;
    i++;
    listNode.appendChild(itemNode);
}

const removeAllItems = () => {
    i = 1;
    // listNode.style.background= "lime";
    listNode.classList.add("main__list--cleared");
    setTimeout(() => listNode.innerHTML = "", 1200);
}

const menuBurger = document.querySelector("#menuBurger")

menuBurger.addEventListener("click", () => {
    document.querySelector(".header__list").classList.toggle("hidden");
})
