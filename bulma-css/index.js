// mobile menu

const burgerIcon = document.getElementById("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon &&
  burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
  });
