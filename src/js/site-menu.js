let btnMenu = document.querySelector(".sidenav__btn-menu");
let btnClose = document.querySelector(".sidenav__btn-close");
let btnSearch = document.querySelector(".sidenav__btn-search");
let btnCall = document.querySelector(".sidenav__btn-call");
let btnMessage = document.querySelector(".sidenav__btn-message");
let btnProfile = document.querySelector(".sidenav__btn-profile");
let menu = document.querySelector(".site-menu");
let overlay = document.querySelector(".overlay");

function openMenu() {
  menu.style.display = "inline";
  btnClose.style.display = "inline";
  btnSearch.style.display = "inline";
  btnCall.style.display = "inline";
  btnMessage.style.display = "inline";
  btnProfile.style.display = "inline";
  overlay.style.display = "inline";
}

btnMenu.addEventListener("click", openMenu);

function closeMenu() {
  menu.style.display = "none";
  overlay.style.display = "none";
}

btnClose.addEventListener("click", closeMenu);
