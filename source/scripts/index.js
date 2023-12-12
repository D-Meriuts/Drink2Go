/* в этот файл добавляет скрипты*/
import navigation from './modules/navigation';
navigation();

import createMap from './modules/map';
createMap();

document.querySelector('.map').classList.remove('map--nojs');

import swiper from './modules/swiper';
swiper();
