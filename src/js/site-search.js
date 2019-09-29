const btnOpenSearch = document.querySelector(".site-search__btn-search");
const btnCloseSearch = document.querySelector(".site-search__btn-close");
const inputSearch = document.querySelector(".site-search__input-search");
const imgSearch = document.querySelector(".site-search__img-search");
const logo = document.querySelector(".site-logo");
const btnCloseMenu = document.querySelector(".site-nav__btn-close");

function showStringSearch() {
  if (window.innerWidth >= "1440") {
    inputSearch.style.right = "24px";
    btnOpenSearch.style.right = "24px";
    inputSearch.style.width = "288px";
    inputSearch.style.paddingRight = "72px";
    btnCloseSearch.style.display = "block";
    imgSearch.style.display = "block";
    logo.style.display = "none";
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

function removestringSearch() {
  if (window.innerWidth >= "1440") {
    setTimeout(function() {
      inputSearch.style.right = "150px";
      btnOpenSearch.style.right = "150px";
    }, 2000);
    inputSearch.style.width = "11%";
    inputSearch.style.paddingRight = "0";
    btnCloseSearch.style.display = "none";
    imgSearch.style.display = "none";
    setTimeout(function() {
      logo.style.display = "block";
    }, 2000);
  } else {
    inputSearch.style.right = "24px";
    btnOpenSearch.style.right = "24px";
    inputSearch.style.width = "11%";
    inputSearch.style.paddingRight = "0";
    btnCloseSearch.style.display = "none";
    imgSearch.style.display = "none";
    setTimeout(function() {
      logo.style.display = "block";
      btnCloseMenu.style.display = "block";
    }, 2000);
  }
}
btnCloseSearch.addEventListener("click", removestringSearch);
