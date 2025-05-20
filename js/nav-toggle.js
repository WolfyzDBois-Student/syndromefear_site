document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".nav-toggle");
  const collapsedMenu = document.querySelector(".navbar-collapsed");
  const links = collapsedMenu?.querySelectorAll("a");

  if (toggleBtn && collapsedMenu) {
    toggleBtn.addEventListener("click", () => {
      collapsedMenu.classList.toggle("open");
    });

    links?.forEach(link => {
      link.addEventListener("click", () => {
        collapsedMenu.classList.remove("open");
      });
    });
  }
});
