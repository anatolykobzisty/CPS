import Swiper from "swiper";
const brandSlider = document.querySelector(".brands__slider");
const deviceSlider = document.querySelector(".devices__slider");
const subMenuSlider = document.querySelector(".sub-menu__slider");

let brandSwiper = new Swiper(brandSlider, {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }
});

let deviceSwiper = new Swiper(deviceSlider, {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }
});

let subMenuSwiper = new Swiper(subMenuSlider, {
  slidesPerView: "auto",
  spaceBetween: 16,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }
});
