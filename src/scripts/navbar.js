const menuBtn = document.getElementById("menu-btn");
const menuClose = document.getElementById("menu-close");
const mobileNav = document.getElementById("mobile-nav");
const closeAria = document.getElementById("close-aria");
const navLinks = document.querySelectorAll(".mobile-navLinks");

navLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  mobileNav.classList.toggle("active");
  menuBtn.classList.toggle("hide");
  menuClose.classList.toggle("hide");
  closeAria.classList.toggle("hide");
}

menuBtn.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
closeAria.addEventListener("click", toggleMenu);
