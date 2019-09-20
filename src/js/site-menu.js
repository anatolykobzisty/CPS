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
  btnMenu.style.display = "none";
  btnClose.style.display = "inline";
  btnSearch.style.display = "inline";
  btnCall.style.top = "804px";
  btnCall.style.right = "auto";
  btnCall.style.left = "32px";
  btnCall.style.zIndex = "4";
  btnMessage.style.top = "804px";
  btnMessage.style.right = "auto";
  btnMessage.style.left = "88px";
  btnMessage.style.zIndex = "4";
  btnProfile.style.top = "804px";
  btnProfile.style.right = "auto";
  btnProfile.style.left = "144px";
  btnProfile.style.zIndex = "4";
  overlay.style.display = "inline";
}

btnMenu.addEventListener("click", openMenu);

function closeMenu() {
  menu.style.display = "none";
  btnMenu.style.display = "inline";
  btnClose.style.display = "none";
  btnSearch.style.display = "none";
  btnCall.style.top = "auto";
  btnCall.style.right = "274px";
  btnCall.style.left = "auto";
  btnCall.style.zIndex = "2";
  btnMessage.style.top = "auto";
  btnMessage.style.right = "218px";
  btnMessage.style.left = "auto";
  btnMessage.style.zIndex = "2";
  btnProfile.style.top = "auto";
  btnProfile.style.right = "162px";
  btnProfile.style.left = "auto";
  btnProfile.style.zIndex = "2";
  overlay.style.display = "none";
}

btnClose.addEventListener("click", closeMenu);
