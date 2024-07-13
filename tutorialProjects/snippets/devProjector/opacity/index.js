
const generateTreshold = () => {
    const arr = []

    for (let i = 0.01; i < 1; i += 0.01) {
        arr.push(Number(i.toFixed(2)));
    }

    return arr;
}

const intersectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(
            (entry) => {
                entry.target.style.opacity = entry.intersectionRatio;
            }
        )
    }, {
    threshold: generateTreshold()
}
);

(() => {
    const targetElements = document.querySelectorAll('.content-image');

    targetElements.forEach((target) => {
        intersectionObserver.observe(target);
    });
})();
