const btnMenu = document.querySelector(".site-nav__btn-menu");
const btnClose = document.querySelector(".site-nav__btn-close");
const btnSearch = document.querySelector(".site-nav__btn-search");
const btnCall = document.querySelector(".site-nav__btn-call");
const btnMessage = document.querySelector(".site-nav__btn-message");
const btnProfile = document.querySelector(".site-nav__btn-profile");
const menu = document.querySelector(".site-menu");
const overlay = document.querySelector(".overlay");

function openMenu() {
  menu.classList.remove("site-menu--show");
  overlay.style.display = "block";
}

btnMenu.addEventListener("click", openMenu);

function closeMenu() {
  menu.classList.add("site-menu--show");
  overlay.style.display = "none";
}

btnClose.addEventListener("click", closeMenu);
