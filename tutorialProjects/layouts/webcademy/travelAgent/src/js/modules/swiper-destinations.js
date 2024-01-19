import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc() {
    const swiper = new Swiper('#swiper-destinations', {

        // loop: true,
        slidesPerView: 2,
        spaceBetween: 32,
        // freeMode: true,
        // Navigation arrows
        navigation: {
            nextEl: '.destinations__next',
            prevEl: '.destinations__prev',
        },
        breakpoints: {
            715: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }
    });
}

export default swiperFunc;
