import Swiper from "swiper";
let devicesBtn = document.querySelector(".devices__btn");
let devicesList = document.querySelector(".devices__list");

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

function openDevicesList() {
  if (devicesList.style.height === "100%") {
    devicesList.style.height = "160px";
  } else {
    devicesList.style.height = "100%";
  }
}

devicesBtn.addEventListener("click", openDevicesList);
