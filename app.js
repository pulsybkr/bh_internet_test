const menuMobile = document.querySelector('.menu-mobile');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');

menuMobile.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if(!menuMobile.contains(e.target) && !navLinks.contains(e.target)){
        navLinks.classList.remove('active');
    }
});
