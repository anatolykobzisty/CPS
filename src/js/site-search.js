const btnOpenSearch = document.querySelector(".site-menu__btn-search");
const btnCloseSearch = document.querySelector(".site-search__btn-close");
const inputSearch = document.querySelector(".site-search__input-search");
const imgSearch = document.querySelector(".site-search__img-search");
const logo = document.querySelector(".site-logo");
const btnCloseMenu = document.querySelector(".site-nav__btn-close");

function showStringSearch() {
  if (window.innerWidth >= "1440") {
    btnOpenSearch.style.display = "none";
    inputSearch.style.display = "block";
    inputSearch.style.width = "0px";
    inputSearch.style.paddingRight = "0px";
    btnCloseSearch.style.display = "none";
    imgSearch.style.display = "block";
    setTimeout(() => {
      inputSearch.style.width = "276px";
      inputSearch.style.paddingRight = "72px";
      btnCloseSearch.style.display = "block";
    }, 500);
  } else if (window.innerWidth >= "768") {
    inputSearch.style.width = "276px";
    inputSearch.style.paddingRight = "72px";
    btnCloseSearch.style.display = "block";
    imgSearch.style.display = "block";
  } else if (window.innerWidth >= "360") {
    inputSearch.style.width = "310px";
    inputSearch.style.paddingRight = "72px";
    btnCloseSearch.style.display = "block";
    imgSearch.style.display = "block";
  } else {
    inputSearch.style.width = "288px";
    inputSearch.style.paddingRight = "72px";
    btnCloseSearch.style.display = "block";
    imgSearch.style.display = "block";
    logo.style.display = "none";
    btnCloseMenu.style.display = "none";
  }
}

btnOpenSearch.addEventListener("click", showStringSearch);

function removeStringSearch() {
  if (window.innerWidth >= "1440") {
    inputSearch.style.width = "20px";
    inputSearch.style.paddingRight = "0";
    btnCloseSearch.style.display = "none";
    setTimeout(() => {
      inputSearch.style.display = "none";
      imgSearch.style.display = "none";
      btnOpenSearch.style.display = "block";
    }, 1500);
  } else if (window.innerWidth >= "360") {
    inputSearch.style.width = "20px";
    inputSearch.style.paddingRight = "0";
    btnCloseSearch.style.display = "none";
    imgSearch.style.display = "none";
  } else {
    inputSearch.style.width = "20px";
    inputSearch.style.paddingRight = "0";
    btnCloseSearch.style.display = "none";
    imgSearch.style.display = "none";
    btnCloseMenu.style.display = "block";
  }
}
btnCloseSearch.addEventListener("click", removeStringSearch);
