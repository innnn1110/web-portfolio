(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const year = document.getElementById("year");

  if (year) year.textContent = String(new Date().getFullYear());

  // Load stored theme (default: dark)
  const saved = localStorage.getItem("theme");
  if (saved === "light") root.dataset.theme = "light";

  function toggleTheme() {
    const isLight = root.dataset.theme === "light";
    if (isLight) {
      delete root.dataset.theme;
      localStorage.setItem("theme", "dark");
    } else {
      root.dataset.theme = "light";
      localStorage.setItem("theme", "light");
    }
  }

  if (btn) btn.addEventListener("click", toggleTheme);
})();
