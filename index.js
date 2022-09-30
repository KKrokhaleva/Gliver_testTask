const menu = document.querySelector(".Menu_hamburger");
const menuMobile = document.querySelector(".Menu_mobile");
const close = document.querySelector(".Menu_close");

menu.addEventListener("click", () => {
    menuMobile.style.display="block";
});

close.addEventListener("click", () => {
    menuMobile.style.display="none";
});


