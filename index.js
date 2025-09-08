const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar__links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
