window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

function showMenu() {
    const menu = document.querySelector('.menuToggle')
    const nav = document.querySelector('.navegacao')

    menu.classList.toggle('active')
    nav.classList.toggle('active')
}