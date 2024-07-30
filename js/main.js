const toggleMenu = document.querySelector(".toggle-btn");
const mainMenu = document.querySelector(".nav-bar");

function displayMainMenu() {
  toggleMenu.addEventListener("click", (e) => {
    e.preventDefault();
    mainMenu.classList.toggle("active");
  });
}

displayMainMenu();
