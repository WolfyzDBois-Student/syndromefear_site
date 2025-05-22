document.addEventListener("DOMContentLoaded", () => {
    const themeLink = document.getElementById("theme-style");
    const modeBtn = document.querySelectorAll(".daltonien-toggle");
  
    const basePath = themeLink.getAttribute("href").startsWith("../") ? "../" : "./";
  
    const setTheme = (isDaltonien) => {
      const newHref = isDaltonien ? `${basePath}styles/daltonien.css` : `${basePath}styles/style.css`;
      themeLink.setAttribute("href", newHref);
      localStorage.setItem("daltonien-mode", isDaltonien ? "1" : "0");
      console.log(`[theme-toggle] Mode ${isDaltonien ? "daltonien" : "normal"} activé.`);
    };
  
    const stored = localStorage.getItem("daltonien-mode");
    if (stored === "1") setTheme(true);
  
    modeBtn.forEach(btn => {
      btn.addEventListener("click", () => {
        const isDaltonien = themeLink.getAttribute("href").includes("daltonien.css");
        setTheme(!isDaltonien);
      });
    });
  });
  