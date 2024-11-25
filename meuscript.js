const menu_hamburguer = document.getElementById('menu_hamburguer')
let mobileIcon = menu_hamburguer.querySelector('i')
const mobileMenu = document.getElementById('mobile-menu')
menu_hamburguer.addEventListener('click',()=>{
    menu_hamburguer.classList.toggle("active")
    mobileMenu.classList.toggle("active")
    mobileIcon.classList.toggle("fa-x")
})