const buttonOffcanvas = document.querySelector(".js-buttonOffcanvas");
const buttonOffcanvasClose = document.querySelector(".js-buttonOffCanvasClose");
const menuOffcanvas = document.querySelector(".js-menuOffcanvas");

function handleClick() {
  menuOffcanvas.classList.add("is-active");
}

function handleClickClose() {
  menuOffcanvas.classList.remove("is-active");
}

buttonOffcanvas.addEventListener("click", handleClick);
buttonOffcanvasClose.addEventListener("click", handleClickClose);
