var currently_dark;
const preferred_theme = localStorage.getItem("preferred_theme");
const theme_toggle = document.getElementById("theme-toggle");

const system_prefers_light = !window.matchMedia('(prefers-color-scheme: dark)');
const choose_light = preferred_theme == null ? system_prefers_light : (preferred_theme == "light");

const moon = `<i class="fa-solid fa-moon"></i>`;
const sun = `<i class="fa-solid fa-sun"></i>`;

if (choose_light) {
  document.documentElement.setAttribute("data-theme", "light");
  currently_dark = false;
  theme_toggle.innerHTML = sun;
}
else {
  document.documentElement.setAttribute("data-theme", "dark");
  currently_dark = true;
  theme_toggle.innerHTML = moon;
}

theme_toggle.addEventListener("click", () => {
  if (currently_dark) {
    localStorage.setItem("preferred_theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    theme_toggle.innerHTML = sun;
  }
  else {
    localStorage.setItem("preferred_theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    theme_toggle.innerHTML = moon;
  }
  currently_dark = !currently_dark;
})

