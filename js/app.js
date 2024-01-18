const btn = document.getElementById("btn");
let theme = "light";


const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (!prefersDarkMode) {
    document.documentElement.classList.add("dark-theme");
    theme = "dark";
}

btn.addEventListener('click', () => {
    if (theme === "light"){
        document.documentElement.classList.add("dark-theme");
        theme = "dark";
    } else if (theme === "dark") {
        document.documentElement.classList.remove("dark-theme");
        theme = "light";
    }
});