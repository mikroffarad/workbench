// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {

    // loop: true,
    slidesPerView: 4,
    spaceBetween: 32,
    // freeMode: true,
    // Navigation arrows
    navigation: {
        nextEl: '.destinations__next',
        prevEl: '.destinations__prev',
    },

});

import autoCompleteJS from "./modules/autoComplete.js";

import { easepick } from '@easepick/core';
import { TimePlugin } from '@easepick/time-plugin';

const picker = new easepick.create({
    element: document.getElementById('datepicker'),
    css: [
        'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
        'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
    ],
    plugins: [TimePlugin],
    format: "HH:mm, DD/MM/YY"
});



// import mobileNav from './modules/mobile-nav.js';
// mobileNav();

