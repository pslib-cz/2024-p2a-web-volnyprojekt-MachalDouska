document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".hamburger-nav");
    const btn = document.querySelector(".hamburger-btn");

    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        nav.classList.toggle("active");
    });
});