import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = () => new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation, Pagination],
});

export default swiper;


// // import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// // import styles bundle
// import 'swiper/css/bundle';

// // init Swiper:
// const swiper = () => new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: false,
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   modules: [Navigation, Pagination],
// });

// export default swiper;
