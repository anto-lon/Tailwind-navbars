const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li')

hamburger.addEventListener("click", () => {
    navLink.classList.toggle("open");
    hamburger.classList.toggle("rotate");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});
