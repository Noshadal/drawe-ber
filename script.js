const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.querySelector(".sidebar");

// Toggle Sidebar Visibility
toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});
