window.addEventListener("scroll", function() {
    var header = document.querySelector('header');
    header.classList.toggle('rolagem', window.scrollY > 0); // Ajusta o cabeçalho quando rola
});

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})