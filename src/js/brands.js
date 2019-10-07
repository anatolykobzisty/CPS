const btn = document.querySelector(".brands__btn");
const brandItems = document.querySelectorAll(".brands__item");

function showMore() {
  window.innerWidth > "960" ? (j = 8) : (j = 6);
  for (let i = j; i < brandItems.length; i++) {
    if (brandItems[i].style.display === "flex") {
      brandItems[i].style.display = "none";
      btn.innerHTML = `<span class="btn-more__text">Показать все (9)</span>`;
    } else {
      brandItems[i].style.display = "flex";
      btn.innerHTML = `<span class="btn-more__text">Свернуть</span>`;
    }
  }
}

btn.addEventListener("click", showMore);
