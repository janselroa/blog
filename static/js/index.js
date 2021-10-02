const darkBoton = document.querySelector(".dark-mode");
const btnMenu = document.querySelector(".btn-menu");
const menuUl = document.querySelector(".menu-ul")

const cambiar_icon = () => {
    if (document.body.classList.contains("white-mode")) {
        darkBoton.children[0].textContent = "white mode";
        btnMenu.children[0].setAttribute("src", "/static/img/icon-menu-black.svg");
    } else {
        btnMenu.children[0].setAttribute("src", "/static/img/icon-menu.svg");
        darkBoton.children[0].textContent = "dark mode"
    }
}
cambiar_icon()

if (localStorage.getItem('mode') == "white") {
    document.body.classList.add("white-mode");
};

darkBoton.addEventListener("click", () => {

    document.body.classList.toggle("white-mode");
    localStorage.setItem("mode", "white");
    cambiar_icon()
    if (localStorage.getItem("mode") == "white") {
        localStorage.setItem("mode", "dark");
    }
});
btnMenu.addEventListener("click", () => {
    menuUl.classList.toggle("menu-shild")
})