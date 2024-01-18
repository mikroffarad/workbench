import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc() {
    const swiper = new Swiper('#swiper-destinations', {

        // loop: true,
        slidesPerView: 1,
        spaceBetween: 32,
        // freeMode: true,
        // Navigation arrows
        navigation: {
            nextEl: '.destinations__next',
            prevEl: '.destinations__prev',
        },
        breakpoints: {
            425: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        }
    });
}

export default swiperFunc;
