// Toggle Class Active

const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu diclik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click diluar sidebar untuk menghilangkan sidebar

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
