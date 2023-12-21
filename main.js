import 'normalize.css';
import './styles/styles.scss';

import Carousels from './modules/carousel';
import StickyHeader from './modules/sticky-header';
import CookiePolicy from './modules/cookie-policy.js';

Carousels.init();
StickyHeader.init('sticky');
CookiePolicy.init();
