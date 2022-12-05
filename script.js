const themeSwitch = document.querySelector(".theme-switch");
let currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : "light";
const heartIcons = document.querySelectorAll(".heart-icon");
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");


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
});



// HEART SELECT

heartIcons.forEach((heart) => {
    heart.addEventListener("click", (e) => {
        e.target.classList.toggle("heart-icon-selected");
    })
});



// HAMBURGER MENU
hamburger.addEventListener("click", () => navbar.classList.toggle("navbar-open"));
