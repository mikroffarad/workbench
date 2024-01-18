import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import swiperFunc from './swiper-destinations';

let swiper, swiperHorizontal;

// 1023.98px
// Breakpoint settings
const breakpoint = window.matchMedia("(max-width: 1023.98px)")
// Fn which checks media and enable/disable swiper
const breakpointChecker = function () {
    if (breakpoint.matches === true) {
        swiperHorizontal = new Swiper('#testimonials-horizontal-swiper', {
            direction: 'horizontal',
            // slidesPerView: 1,
            slidesPerView: 'auto',
            spaceBetween: 32,
            grabCursor: true,
            ally: false,
            freeMode: true,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 0.5,
                disableOnInteration: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
            }
        })
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
    } else if (breakpoint.matches === false) {
        swiper = new Swiper('#testimonials-col-1, #testimonials-col-2, #testimonials-col-3', {
            direction: 'vertical',
            // slidesPerView: 4,
            slidesPerView: "auto",
            spaceBetween: 0,
            grabCursor: true,
            ally: false,
            freeMode: true,
            speed: 2000,
            loop: true,
            // autoplay: {
            //     delay: 0.5,
            //     disableOnInteration: false,
            // },
        });
        if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true);
        return;
    }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();

export default swiperFunc;
