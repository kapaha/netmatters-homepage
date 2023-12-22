import 'normalize.css';
import './styles/styles.scss';

import Carousels from './modules/carousel';
import StickyHeader from './modules/sticky-header';
import CookiePolicy from './modules/cookie-policy.js';
import MobileMenu from './modules/mobile-menu.js';

Carousels.init();
StickyHeader.init();
CookiePolicy.init();
MobileMenu.init();
