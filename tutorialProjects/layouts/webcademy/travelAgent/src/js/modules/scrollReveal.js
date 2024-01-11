import ScrollReveal from 'scrollreveal'

function scrollRevealFunc() {
    ScrollReveal({
        distance: '60px',
        duration: 2800,
    })

    ScrollReveal().reveal(`.header, .partners, .destinations__title`, {
        origin: "top"
    })
    ScrollReveal().reveal(`.discover__hint, .discover__title`, {
        origin: "left"
    })
    ScrollReveal().reveal(`.discover__scroll-down, .discover__text, .destinations__buttons`, {
        origin: "right"
    })
    ScrollReveal().reveal(`.discover__form, .discover__picture-img`, {
        origin: "bottom"
    })
    ScrollReveal().reveal(`.partners`)
}

export default scrollRevealFunc;
