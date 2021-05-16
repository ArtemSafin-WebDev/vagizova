import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function newsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-news-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            spaceBetween: 20,
            slidesPerView: 4,
            navigation: {
                nextEl: element.querySelector('.news__slider-arrow--next'),
                prevEl: element.querySelector('.news__slider-arrow--prev')
            }
        });
    });
}
