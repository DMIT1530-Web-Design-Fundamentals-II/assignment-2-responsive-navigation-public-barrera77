const toggleMenu = document.querySelector(".toggle-btn");
const mainMenu = document.querySelector(".nav-bar");
const dropDownMenus = document.querySelectorAll(".dropdown");
const menuLinks = document.querySelectorAll(".menu-link");

/**
 * display the nav menu when clicking the toggle button in mobile view
 */
function displayMainMenu() {
  toggleMenu.addEventListener("click", (e) => {
    e.preventDefault();
    mainMenu.classList.toggle("active");

    // Hide all dropdowns when clicking the toggle button in mobile view
    if (!mainMenu.classList.contains("active")) {
      dropDownMenus.forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  });
}

displayMainMenu();

/**
 * Display the dropdown menus when click on the menu links
 */
function displayDropDown() {
  menuLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      dropDownMenus[index].classList.toggle("active");
    });
  });
}

displayDropDown();
