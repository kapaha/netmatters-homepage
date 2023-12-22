import Carosels from './carousel';
import { addGlobalEventListener } from './utils';

const bodyEl = document.body;
const siteWrapperOverlay = document.querySelector('.site-wrapper-overlay');

function init() {
    addGlobalEventListener('click', '[data-btn="mobile-menu"]', () => {
        bodyEl.classList.add('mobile-menu-active');
        Carosels.carouselHero.refresh();
    });

    siteWrapperOverlay.addEventListener('click', () => {
        bodyEl.classList.remove('mobile-menu-active');
        Carosels.carouselHero.refresh();
    });
}

export default {
    init,
};
