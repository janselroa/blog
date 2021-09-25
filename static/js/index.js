const darkBoton = document.querySelector(".dark-mode");
const btnMenu = document.querySelector(".btn-menu");
const menuUl = document.querySelector(".menu-ul")
darkBoton.addEventListener("click", () => {
    document.body.classList.toggle("white-mode")
    if (document.body.classList.contains("white-mode")) {
        darkBoton.children[0].textContent = "white mode";
        btnMenu.children[0].setAttribute("src", "/static/img/icon-menu-black.svg");
    } else {
        btnMenu.children[0].setAttribute("src", "/static/img/icon-menu.svg");
        darkBoton.children[0].textContent = "dark mode"
    }
})
btnMenu.addEventListener("click", () => {
    menuUl.classList.toggle("menu-shild")
})