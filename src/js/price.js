import Swiper from "swiper";

let swiper = new Swiper(".price__slider", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".price__pagination",
    clickable: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }
});
