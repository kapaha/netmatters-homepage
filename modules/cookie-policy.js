import Carousels from './carousel';

const COOKIE_NAME = 'cookie_policy_accepted';

const modal = document.querySelector('.modal');
const acceptCookiesBtn = document.querySelector('.modal__accept-cookies');

function getCookie(cname) {
    let name = cname + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

export default {
    init() {
        const cookie = getCookie(COOKIE_NAME);

        if (!cookie) {
            document.body.classList.add('modal-active');
        }

        acceptCookiesBtn.addEventListener('click', () => {
            document.body.classList.remove('modal-active');

            setCookie(COOKIE_NAME, 1, 180);

            // Fixes carousel translateX not being updated when body overflow changed
            Carousels.carouselHero.refresh();
        });
    },
};
