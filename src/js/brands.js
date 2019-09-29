const btn = document.querySelector(".brands__btn");
const brands = document.querySelector(".brands__container");

btn.addEventListener("click", showMore);

function showMore() {
  if (brands.style.height === "100%") {
    brands.style.height = "176px";
    btn.innerHTML = `<span class="btn-more__text">Показать все (9)</span>`;
  } else {
    brands.style.height = "100%";
    btn.innerHTML = `<span class="btn-more__text">Свернуть</span>`;
  }
}
