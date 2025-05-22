document.addEventListener("DOMContentLoaded", () => {
  const themeLink = document.getElementById("theme-style");
  const toggleButtons = document.querySelectorAll(".daltonien-toggle");

  if (!themeLink) return;

  const basePath = themeLink.getAttribute("href").startsWith("../") ? "../" : "./";
  const saved = localStorage.getItem("daltonien-mode");
  const isDaltonien = saved === "1";

  // Appliquer le thème dès le chargement
  themeLink.setAttribute("href", `${basePath}styles/${isDaltonien ? "daltonien" : "style"}.css`);

  toggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const isCurrentlyDaltonien = themeLink.getAttribute("href").includes("daltonien");
      const next = !isCurrentlyDaltonien;
      themeLink.setAttribute("href", `${basePath}styles/${next ? "daltonien" : "style"}.css`);
      localStorage.setItem("daltonien-mode", next ? "1" : "0");
      console.log(`[theme-toggle] Thème activé : ${next ? "daltonien" : "normal"}`);
    });
  });
});
