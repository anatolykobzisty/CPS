let dots = document.querySelector(".info-company__dots");
let text = document.querySelector(".info-company__text");
let moreText = document.querySelector(".info-company__text-more");
let button = document.querySelector(".info-company__btn");

function openText() {
  if (dots.style.display === "none") {
    moreText.style.display = "none";
    text.style.overflow = "hidden";
    text.style.height = "88px";
    dots.style.display = "inline";
    button.innerHTML = "Читать далее";
  } else {
    moreText.style.display = "inline";
    text.style.overflow = "visible";
    text.style.height = "230px";
    dots.style.display = "none";
    button.innerHTML = "Читать меньше";
  }
}

button.addEventListener("click", openText);
