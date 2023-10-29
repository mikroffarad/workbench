import { generateTreshold } from "./utils.js";

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
