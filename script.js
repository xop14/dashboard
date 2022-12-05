const themeSwitch = document.querySelector(".theme-switch");
let currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : "light";
const heartIcons = document.querySelectorAll(".heart-icon");

// DARK MODE

if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
}

themeSwitch.addEventListener("click", (e) => {
    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        currentTheme = "light";
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        currentTheme = "dark";
        localStorage.setItem("theme", "dark");
    }
})



// HEART SELECTED

heartIcons.forEach((heart) => {
    heart.addEventListener("click", (e) => {
        e.target.classList.toggle("heart-icon-selected");
    })
})