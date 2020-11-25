import Swiper from "swiper";


const hotelSwiper = new Swiper(".hotel__slider", {
  loop: true,
  speed: 300,
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

const reviewsSwiper = new Swiper(".reviews__slider", {
  loop: true,
  speed: 300,
  navigation: {
    nextEl: ".reviews__slider-btn--next",
    prevEl: ".reviews__slider-btn--prev",
  },
});
