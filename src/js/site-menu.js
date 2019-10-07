const btnMenu = document.querySelector(".site-header__btn-menu");
const btnClose = document.querySelector(".site-menu__btn-close");
const menu = document.querySelector(".site-menu");
const overlay = document.querySelector(".overlay");

function openMenu() {
  menu.style.transform = "translateX(0%)";
  overlay.style.display = "block";
  document.body.classList.add("no-scroll");
}

btnMenu.addEventListener("click", openMenu);

function closeMenu() {
  menu.style.transform = "translateX(-100%)";
  overlay.style.display = "none";
  document.body.classList.remove("no-scroll");
}

btnClose.addEventListener("click", closeMenu);

function closeModal() {
  closeMenu();
}

overlay.addEventListener("click", closeModal);
