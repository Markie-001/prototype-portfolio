// =========================================
// Mobile menu
// =========================================
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

function setMenu(isOpen) {
  nav.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

// Open or close the menu when the button is clicked
menuToggle.addEventListener("click", () => {
  const isOpen = !nav.classList.contains("open");
  setMenu(isOpen);
});

// Close the menu after a link is clicked
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Close the menu with the Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

// =========================================
// Current year in the footer
// =========================================
document.getElementById("year").textContent = new Date().getFullYear();
