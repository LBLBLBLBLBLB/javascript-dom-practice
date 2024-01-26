const sideBtn = document.querySelector(".sidebar-btn");
const sidebar = document.querySelector(".sidebar");
sideBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
