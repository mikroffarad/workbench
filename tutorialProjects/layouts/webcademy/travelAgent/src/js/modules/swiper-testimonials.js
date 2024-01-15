import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc() {
    const swiper = new Swiper('#testimonials-col-1, #testimonials-col-2, #testimonials-col-3', {
        direction: 'vertical',
        // slidesPerView: 4,
        slidesPerView: "auto",
        spaceBetween: 32,
        grabCursor: true,
        ally: false,
        freeMode: true,
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 0.5,
            disableOnInteration: false,
        }
    });
}

export default swiperFunc;
