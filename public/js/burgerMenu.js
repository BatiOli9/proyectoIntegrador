const button = document.querySelector(".burger-button");
const nav = document.querySelector(".burger-nav");

button.addEventListener("click", () => {
    nav.classList.toggle("activo")
});

$(".burger-button").on("click", ()=> {
    $(".burger-nav").toggleClass("activo")
});