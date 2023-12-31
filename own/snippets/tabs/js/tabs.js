const tabsNode = document.querySelectorAll(".item-tabs")
const tabsDataLength = Object.entries(tabsData).length
const tabsNodeLength = tabsNode.length;

console.log(tabsNodeLength === tabsDataLength);

if (tabsNodeLength !== tabsDataLength) {
    document.body.style.backgroundColor = "red"
}

tabsNode[0].classList.add("item-tabs--selected")

tabsNode.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".item-tabs--selected").classList.remove("item-tabs--selected")
        item.classList.add("item-tabs--selected")
        let index = 0
        document.querySelectorAll(".item-tabs").forEach((item) => {
            if (!item.classList.contains("item-tabs--selected")) {
                index++
            } else {
                console.log(index);
                document.querySelector(".content__container").innerHTML = Object.entries(tabsData)[index][1].content
                index = 0;
            }
        })

    })
})
