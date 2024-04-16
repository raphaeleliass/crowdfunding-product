const menuBtn = document.getElementById("menu-btn");
const menuClose = document.getElementById("menu-close");
const mobileNav = document.getElementById("mobile-nav");
const closeAria = document.getElementById("close-aria");
const navLinks = document.querySelectorAll(".mobile-navlinks");

navLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  mobileNav.classList.toggle("active");
  menuBtn.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
  closeAria.classList.toggle("hidden");
}

menuBtn.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
closeAria.addEventListener("click", toggleMenu);
