import { Logger } from 'sass';

const Scroll = (() => {
    const DIRECTION = {
        UP: 'UP',
        DOWN: 'DOWN',
        NONE: 'NONE',
    };

    let positionY = 0;
    let previousPositionY = 0;
    let currentDirection = DIRECTION.NONE;

    const updateDirection = () => {
        currentDirection =
            positionY < previousPositionY ? DIRECTION.UP : DIRECTION.DOWN;
    };

    const update = () => {
        positionY = window.scrollY;
        updateDirection();
        previousPositionY = positionY;
    };

    return {
        DIRECTION,
        getDirection: () => currentDirection,
        getPositionY: () => positionY,
        update,
    };
})();

const Header = (() => {
    const element = document.querySelector('header');
    let fixedElement = null;

    const onScrollUp = () => {
        if (fixedElement) return;

        fixedElement = element.cloneNode(true);
        fixedElement.classList.add('fixed', 'slideDown');

        element.style.visibility = 'hidden';
        element.parentElement.appendChild(fixedElement);
    };

    const onScollDown = () => {
        if (!fixedElement) return;

        fixedElement.classList.remove('slideDown');
        fixedElement.classList.add('slideUp');

        element.style.visibility = '';

        setTimeout(() => {
            fixedElement.remove();
            fixedElement = null;
        }, 250);
    };

    const onScrolledToTop = () => {
        if (!fixedElement) return;

        fixedElement.remove();
        fixedElement = null;

        element.style.visibility = '';
    };

    const update = (scrollPositionY, scrollDirection) => {
        if (!element) {
            console.error('Header element not found.');
            return;
        }

        const scrolledToTop = scrollPositionY === 0;

        if (scrolledToTop) {
            onScrolledToTop();
            return;
        }

        if (scrollDirection === 'DOWN') {
            onScollDown();
            return;
        }

        const headerVisible =
            scrollPositionY < element.getBoundingClientRect().height;

        if (scrollDirection === 'UP' && !headerVisible) {
            onScrollUp();
        }
    };

    return {
        update,
    };
})();

function debounce(callback, delay) {
    let timeoutId = null;

    return (...args) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

function handleScroll() {
    Scroll.update();
    Header.update(Scroll.getPositionY(), Scroll.getDirection());
}

const debouncedHandleScroll = debounce(handleScroll, 100);

export default {
    init() {
        window.addEventListener('scroll', () => debouncedHandleScroll());
    },
};
