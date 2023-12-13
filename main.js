import 'normalize.css';
import '@splidejs/splide/css';
import './styles/styles.scss';

import Splide from '@splidejs/splide';

new Splide('.splide', {
    type: 'loop',
    arrows: false,
    autoplay: true,
}).mount();
