const modalCall = document.querySelector(".modal-call");
const modalMessage = document.querySelector(".modal-message");
const btnCloseCall = document.querySelector(".modal-call__btn-close");
const btnCloseMessage = document.querySelector(".modal-message__btn-close");
const headerBtnCall = document.querySelector(".site-header__btn-call");
const headerBtnMessage = document.querySelector(".site-header__btn-message");
const menuBtnCall = document.querySelector(".site-menu__btn-call");
const menuBtnMessage = document.querySelector(".site-menu__btn-message");
const menu = document.querySelector(".site-menu");
const overlay = document.querySelector(".overlay");

function openModalCall() {
  modalCall.classList.remove("visually-hidden");
  modalCall.style.transform = "translateX(0%)";
  if (window.innerWidth < "1440") {
    menu.style.transform = "translateX(-100%)";
  } else {
    menu.style.transform = "translateX(0%)";
  }
  overlay.style.display = "block";
  overlay.style.zIndex = "3";
  document.body.classList.add("no-scroll");
}

function openModalMessage() {
  modalMessage.classList.remove("visually-hidden");
  modalMessage.style.transform = "translateX(0%)";
  if (window.innerWidth < "1440") {
    menu.style.transform = "translateX(-100%)";
  } else {
    menu.style.transform = "translateX(0%)";
  }
  overlay.style.display = "block";
  overlay.style.zIndex = "3";
  document.body.classList.add("no-scroll");
}

headerBtnCall.addEventListener("click", openModalCall);
headerBtnMessage.addEventListener("click", openModalMessage);
menuBtnCall.addEventListener("click", openModalCall);
menuBtnMessage.addEventListener("click", openModalMessage);

function closeModalCall() {
  modalCall.style.transform = "translateX(100%)";
  if (window.innerWidth < "1440") {
    menu.style.transform = "translateX(-100%)";
  } else {
    menu.style.transform = "translateX(0%)";
  }
  overlay.style.display = "none";
  overlay.style.zIndex = "1";
  document.body.classList.remove("no-scroll");
  setTimeout(() => {
    modalCall.classList.add("visually-hidden");
  }, 1500);
}

function closeModalMessage() {
  modalMessage.style.transform = "translateX(100%)";
  if (window.innerWidth < "1440") {
    menu.style.transform = "translateX(-100%)";
  } else {
    menu.style.transform = "translateX(0%)";
  }
  overlay.style.display = "none";
  overlay.style.zIndex = "1";
  document.body.classList.remove("no-scroll");
  setTimeout(() => {
    modalMessage.classList.add("visually-hidden");
  }, 1500);
}

btnCloseCall.addEventListener("click", closeModalCall);
btnCloseMessage.addEventListener("click", closeModalMessage);

function closeModal() {
  if (modalCall.style.transform === "translateX(0%)") {
    closeModalCall();
  }
  closeModalMessage();
}

overlay.addEventListener("click", closeModal);
