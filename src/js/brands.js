import Swiper from "swiper";

let swiper = new Swiper(".brands__slider", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".brands__pagination",
    clickable: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }
});
