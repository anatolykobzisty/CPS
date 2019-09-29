const btn = document.querySelector(".devices__btn");
const devices = document.querySelector(".devices__container");

btn.addEventListener("click", showMore);

function showMore() {
  if (devices.style.height === "100%") {
    devices.style.height = "176px";
    btn.innerHTML = `<span class="btn-more__text">Показать все (9)</span>`;
  } else {
    devices.style.height = "100%";
    btn.innerHTML = `<span class="btn-more__text">Свернуть</span>`;
  }
}
