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

        setTimeout(() => {
            group.classList.add("active")
        })

        setTimeout(() => {
            document.querySelectorAll(".card--little").forEach((card) => {
                if (group.classList.contains("active")) {
                    card.style.zIndex = "9";
                }
            })
        }, 300)
    })

    group.addEventListener("mouseleave", () => {
        group.classList.remove("active")
    })

    document.addEventListener('click', function (event) {
        // Check if "card-group" or its child elements are clicked
        if (event.target !== group && !group.contains(event.target)) {
            if (group.classList.contains('active')) {
                group.classList.remove('active');
            }
        }
    });
})
