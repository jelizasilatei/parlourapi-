// Target our html with JavaScript
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

// Add an eventistener to toggle the two classes.
// Call the mobileMenu function
menu.addEventListener('click', mobileMenu);