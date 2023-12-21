import '@splidejs/splide/css';

import Splide from '@splidejs/splide';

const carouselHero = new Splide('#carousel-hero', {
    type: 'loop',
    arrows: false,
    autoplay: true,
    interval: 5000,
});

const carouselAccreditations = new Splide('#carousel-accreditations', {
    type: 'loop',
    autoplay: true,
    autoWidth: true,
    autoHeight: true,
    arrows: false,
    drag: false,
    pagination: false,
    interval: 3000,
    gap: '90px',
});

const carouselClients = new Splide('#carousel-clients', {
    type: 'loop',
    autoplay: true,
    autoWidth: true,
    autoHeight: true,
    arrows: false,
    drag: false,
    pagination: false,
    interval: 3000,
    gap: '90px',
});

function init() {
    carouselHero.mount();
    carouselAccreditations.mount();
    carouselClients.mount();

    carouselHero.on('drag', function () {
        carouselHero.root.style.cursor = 'grabbing';
    });

    carouselHero.on('dragged', function () {
        carouselHero.root.style.cursor = 'grab';
    });
}

export default {
    init,
    carouselHero,
};
