document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".nav-toggle");
    const collapsedMenu = document.querySelector(".navbar-collapsed");
  
    if (toggleButton && collapsedMenu) {
      toggleButton.addEventListener("click", () => {
        collapsedMenu.classList.toggle("open");
      });
    }
  });
  