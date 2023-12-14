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

    const updateTopPosition = (
        stickyHeaderClass,
        scrollPositionY,
        scrollDirection,
    ) => {
        if (!element) {
            console.error('Header element not found.');
            return;
        }

        const scrolledToTop = scrollPositionY === 0;

        if (scrolledToTop || scrollDirection === 'DOWN') {
            element.classList.remove(stickyHeaderClass);
            return;
        }

        const headerVisible =
            scrollPositionY < element.getBoundingClientRect().height;

        if (scrollDirection === 'UP' && !headerVisible) {
            element.classList.add(stickyHeaderClass);
        }
    };

    return {
        updateTopPosition,
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

function handleScroll(stickyHeaderClass) {
    Scroll.update();
    Header.updateTopPosition(
        stickyHeaderClass,
        Scroll.getPositionY(),
        Scroll.getDirection(),
    );
}

const debouncedHandleScroll = debounce(handleScroll, 100);

export default {
    init(stickyHeaderClass) {
        window.addEventListener('scroll', () =>
            debouncedHandleScroll(stickyHeaderClass),
        );
    },
};
