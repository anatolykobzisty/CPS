import Swiper from "swiper";

let swiper = new Swiper(".devices__slider", {
  slidesPerView: "auto",
  spaceBetween: 15,
  pagination: {
    el: ".devices__pagination",
    clickable: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }
});
