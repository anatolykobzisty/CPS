import Swiper from "swiper";
let brandsBtn = document.querySelector(".brands__btn");
let brandsList = document.querySelector(".brands__list");

if (window.innerWidth <= "1439") {
  let swiper = new Swiper(".brands__slider", {
    init: "true",
    slidesPerView: "false",
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
} else swiper.destroy(deleteInstance, cleanStyles);

function openBrandsList() {
  if (brandsList.style.height === "100%") {
    brandsList.style.height = "170px";
  } else {
    brandsList.style.height = "100%";
  }
}

brandsBtn.addEventListener("click", openBrandsList);
