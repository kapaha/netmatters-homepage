import '@splidejs/splide/css';

import Splide from '@splidejs/splide';

export const carousels = {
    init() {
        const carouselHero = new Splide('#carousel-hero', {
            type: 'loop',
            arrows: false,
            autoplay: true,
            interval: 5000,
        }).mount();

        new Splide('#carousel-accreditations', {
            type: 'loop',
            autoplay: true,
            autoWidth: true,
            autoHeight: true,
            arrows: false,
            drag: false,
            pagination: false,
            interval: 3000,
            gap: '90px',
        }).mount();

        new Splide('#carousel-clients', {
            type: 'loop',
            autoplay: true,
            autoWidth: true,
            autoHeight: true,
            arrows: false,
            drag: false,
            pagination: false,
            interval: 3000,
            gap: '90px',
        }).mount();

        carouselHero.on('drag', function () {
            carouselHero.root.style.cursor = 'grabbing';
        });

        carouselHero.on('dragged', function () {
            carouselHero.root.style.cursor = 'grab';
        });
    },
};
