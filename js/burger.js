const burger = document.querySelector(".header__nav__burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("menu_active");
});
