const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".navigation");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});
