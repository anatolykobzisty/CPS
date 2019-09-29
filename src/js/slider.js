import Swiper from "swiper";

(function() {
  "use strict";

  const breakpoint = window.matchMedia("(min-width: 768px)");
  let mySwiper;

  const enableSwiper = function() {
    mySwiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 16,
      a11y: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  };

  const breakpointChecker = function() {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  breakpoint.addListener(breakpointChecker);

  breakpointChecker();
})();
