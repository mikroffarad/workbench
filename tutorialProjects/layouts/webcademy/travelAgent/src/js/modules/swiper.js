import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc() {
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
}

export default swiperFunc;
