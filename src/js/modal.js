const modalCall = document.querySelector(".modal-call");
const modalMessage = document.querySelector(".modal-message");
const btnCloseCall = document.querySelector(".modal-call__btn-close");
const btnCloseMessage = document.querySelector(".modal-message__btn-close");
const btnCall = document.querySelector(".site-nav__btn-call");
const btnMessage = document.querySelector(".site-nav__btn-message");
const overlay = document.querySelector(".overlay");

function openModalCall() {
  modalCall.style.display = "block";
  overlay.style.display = "block";
  overlay.style.zIndex = "3";
}

function openModalMessage() {
  modalMessage.style.display = "block";
  overlay.style.display = "block";
  overlay.style.zIndex = "3";
}

btnCall.addEventListener("click", openModalCall);
btnMessage.addEventListener("click", openModalMessage);

function closeModalCall() {
  modalCall.style.display = "none";
  overlay.style.display = "none";
  overlay.style.zIndex = "1";
}

function closeModalMessage() {
  modalMessage.style.display = "none";
  overlay.style.display = "none";
  overlay.style.zIndex = "1";
}

btnCloseCall.addEventListener("click", closeModalCall);
btnCloseMessage.addEventListener("click", closeModalMessage);
