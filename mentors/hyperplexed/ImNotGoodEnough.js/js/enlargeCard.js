const cardsBig = document.querySelectorAll(".card--big, .card--little");


cardsBig.forEach((card) => {
    card.addEventListener("click", () => {
        if (card.parentNode.parentNode.classList.contains("active")) {
            if (card.classList.contains("enlarged")) {
                document.querySelectorAll(".hidden").forEach((card) => {
                    card.parentNode.removeChild(card);
                })
                card.classList.remove("enlarged");
                card.classList.remove("enlarged--little")
            } else {
                const clone = card.cloneNode(true);

                // const transformValue = window.getComputedStyle(card).getPropertyValue('transform');
                const allCSSValues = window.getComputedStyle(card)
                // clone.style.transform = transformValue;


                setTimeout(() => {
                    clone.classList.add("hidden");
                    card.parentNode.appendChild(clone); // Adding hidden card to container
                    card.classList.add("enlarged");

                    if (card.classList.contains("card--little")) {
                        card.classList.add("enlarged--little");
                    }
                })

                for (let i = 0; i < allCSSValues.length; i++) {
                    const propertyName = allCSSValues[i];
                    const propertyValue = allCSSValues.getPropertyValue(propertyName);
                    clone.style.setProperty(propertyName, propertyValue)
                }
            }
        } else {
            console.log("doesn't contain active");
        }
    })

    card.parentNode.parentNode.addEventListener("mouseleave", () => {
        document.querySelectorAll(".enlarged").forEach((card) => {
            card.classList.remove("enlarged");
            card.classList.remove("enlarged--little");
        });
        document.querySelectorAll(".hidden").forEach((card) => {
            card.parentNode.removeChild(card)
        });
        document.querySelectorAll(".enlarged--little").forEach((card) => {
            card.classList.remove(".enlarged--little");
        });
        document.querySelectorAll(".card--little").forEach((card) => {
            card.style.zIndex = "unset";
        });
    })
})
