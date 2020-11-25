import Swiper, {
  Navigation,
  Pagination
} from "swiper";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".hotel__slider", {
  loop: true,
  speed: 500,
  effect: 'fade',
  fade: {
    crossFade: true
  },
  navigation: {
    nextEl: ".hotel__slider-btn--next",
    prevEl: ".hotel__slider-btn--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});