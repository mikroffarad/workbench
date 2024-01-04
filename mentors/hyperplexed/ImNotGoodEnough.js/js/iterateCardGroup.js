const cardGroups = document.querySelectorAll(".card-group")

let activeIndex = 0;

const handleLoveClick = () => {

    const nextIndex = activeIndex + 1 <= cardGroups.length - 1 ? activeIndex + 1 : 0;
    const currentGroup = document.querySelector(`.card-group[data-status="active"]`),
        nextGroup = document.querySelector(`.card-group[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";
    nextGroup.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    })

}

const handleHateClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : cardGroups.length - 1;
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "before";
    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    })
}

cardGroups.forEach((group) => {


    group.addEventListener("mouseenter", () => {
        group.classList.add("active")


        setTimeout(() => {
            document.querySelectorAll(".card--little").forEach((card) => {

                if (group.classList.contains("active")) {
                    card.style.zIndex = "9999";
                }
            })
        }, 500)
    })



    group.addEventListener("mouseleave", () => {
        group.classList.remove("active")
    })

    document.addEventListener('click', function (event) {

        // Перевірка, чи не було натиснуто на "card-group" або його дочірні елементи
        if (event.target !== group && !group.contains(event.target)) {
            // Перевірка, чи "card-group" має клас "active"
            if (group.classList.contains('active')) {
                // Якщо має, то прибрати клас "active"
                group.classList.remove('active');
            }
        }
    });
})
