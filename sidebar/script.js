const sideBtn = document.querySelector(".sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

sideBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  }
});
