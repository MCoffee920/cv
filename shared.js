const backdrop = document.querySelector(".backdrop");
const hamburger = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function () {
    navMenu.classList.add("open");
    backdrop.style.display = 'block';
    setTimeout(function () {
        backdrop.classList.add("open");
    }, 10);
    backdrop.classList.add("open");
});

backdrop.addEventListener("click", function () {
    navMenu.classList.remove("open");
    closeMenu();
});

function closeMenu() {
    backdrop.classList.remove("open");
    setTimeout(function () {
        backdrop.style.display = "none";
    }, 200);
}