function initNavToggle() {
  console.log("[nav-toggle] Initialisation...");

  const toggleBtn = document.querySelector(".nav-toggle");
  const collapsedMenu = document.querySelector(".navbar-collapsed");

  if (!toggleBtn) {
    console.warn("[nav-toggle] Bouton .nav-toggle introuvable. Nouvelle tentative dans 100ms.");
    return setTimeout(initNavToggle, 100);
  }

  if (!collapsedMenu) {
    console.warn("[nav-toggle] Menu .navbar-collapsed introuvable. Nouvelle tentative dans 100ms.");
    return setTimeout(initNavToggle, 100);
  }

  console.log("[nav-toggle] Bouton trouvé :", toggleBtn);
  console.log("[nav-toggle] Menu trouvé :", collapsedMenu);

  const links = collapsedMenu.querySelectorAll("a");
  console.log(`[nav-toggle] ${links.length} lien(s) trouvé(s) dans le menu.`);

  toggleBtn.addEventListener("click", () => {
    collapsedMenu.classList.toggle("open");
    console.log(`[nav-toggle] Menu ${collapsedMenu.classList.contains("open") ? "ouvert" : "fermé"}.`);
  });

  links.forEach((link, index) => {
    console.log(`[nav-toggle] Lien #${index + 1} → ${link.href}`);
    link.addEventListener("click", () => {
      collapsedMenu.classList.remove("open");
      console.log(`[nav-toggle] Menu fermé après clic sur lien : ${link.href}`);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("[nav-toggle] DOMContentLoaded déclenché.");
  initNavToggle();
});
