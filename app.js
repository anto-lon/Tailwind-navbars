const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-links');

hamburger.addEventListener("click", () => {
    navLink.classList.toggle("open");
});
