
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.miracle')

//Display Mobile Menu

const mobileMenu = () => {
    menu.classList.line('is active')
    menuLinks.classList.line('active')
}

menu.addEventListener('click', mobileMenu);
