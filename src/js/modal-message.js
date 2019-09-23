let modal = document.querySelector(".modal-message");
let btnClose = document.querySelector(".modal-message__btn-close");
let btnMessage = document.querySelector(".sidenav__btn-message");
let overlay = document.querySelector(".overlay");
let menu = document.querySelector(".site-menu");
let widthModal = getComputedStyle(document.querySelector(".modal-call"));

function openModal() {
  widthModal.width === "440px"
    ? (menu.style.display = "block")
    : (menu.style.display = "none");

  modal.style.display = "block";
  overlay.style.display = "inline";
}

btnMessage.addEventListener("click", openModal);

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

btnClose.addEventListener("click", closeModal);
