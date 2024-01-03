const cardsBig = document.querySelectorAll(".card--big");



cardsBig.forEach((card) => {
    card.addEventListener("click", () => {
        if (card.parentNode.parentNode.classList.contains("active")) {
            if (card.classList.contains("enlarged")) {
                document.querySelectorAll(".hidden").forEach((card) => {
                    card.parentNode.removeChild(card);
                })
                card.classList.remove("enlarged");
            } else {
                const clone = card.cloneNode(true);

                const transformValue = window.getComputedStyle(card).getPropertyValue('transform');
                clone.style.transform = transformValue;

                clone.classList.add("hidden");
                card.parentNode.appendChild(clone); // Adding hidden card to container
                card.classList.add("enlarged");
            }
        } else {
            console.log("doesn't contain active");
        }
    })
    card.parentNode.parentNode.addEventListener("mouseleave", () => {
        document.querySelectorAll(".enlarged").forEach((card) => {
            card.classList.remove("enlarged");
        });
        document.querySelectorAll(".hidden").forEach((card) => {
            card.parentNode.removeChild(card)
        });
    })
})
