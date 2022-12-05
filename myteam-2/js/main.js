var elBurger = document.querySelector(".header__btn");
var elClose = document.querySelector(".header__btn-close");
var elHeader = document.querySelector(".header");


elBurger.addEventListener("click", function() {
    elHeader.classList.add("header--open")
})

elClose.addEventListener("click", function() {
    elHeader.classList.remove("header--open")
})