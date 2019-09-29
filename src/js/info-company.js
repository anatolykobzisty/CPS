const text = document.querySelector(".info-company__text-continuation");
const textMore = document.querySelector(".info-company__text-more");
const dots = document.querySelector(".info-company__dots");
const btn = document.querySelector(".info-company__btn");
const btnText = document.querySelector(".btn-more__text");

btn.addEventListener("click", showMore);

function showMore() {
  if (dots.style.display === "none") {
    if (window.matchMedia("(min-width: 768px)").matches) {
      text.style.display = "inline";
      btn.style.marginTop = "0";
      btn.innerHTML = `<span class="btn-more__text">Читать меньше</span>`;
    } else {
      text.style.display = "none";
      btn.innerHTML = `<span class="btn-more__text">Читать далее</span>`;
    }
    dots.style.display = "inline-block";
    textMore.style.display = "none";
    btn.innerHTML = `<span class="btn-more__text">Читать далее</span>`;
  } else {
    text.style.display = "inline";
    dots.style.display = "none";
    textMore.style.display = "inline";
    btn.style.marginTop = "16px";
    btn.innerHTML = `<span class="btn-more__text">Читать меньше</span>`;
  }
}
