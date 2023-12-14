import 'normalize.css';
import './styles/styles.scss';

import { carousels } from './modules/carousel';
import StickyHeader from './modules/sticky-header';

carousels.init();
StickyHeader.init('sticky');
