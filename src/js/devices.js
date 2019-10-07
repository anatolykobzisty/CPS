const btn = document.querySelector(".devices__btn");
const deviceItems = document.querySelectorAll(".devices__item");

function showMore() {
  window.innerWidth > "960" ? (j = 4) : (j = 3);
  for (let i = j; i < deviceItems.length; i++) {
    if (deviceItems[i].style.display === "flex") {
      deviceItems[i].style.display = "none";
      btn.innerHTML = `<span class="btn-more__text">Показать все (9)</span>`;
    } else {
      deviceItems[i].style.display = "flex";
      btn.innerHTML = `<span class="btn-more__text">Свернуть</span>`;
    }
  }
}
btn.addEventListener("click", showMore);
