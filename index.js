const menuButton = document.querySelector('.header_menu')
const menu = document.querySelector('.menu-left')

menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu-left--active')
})

