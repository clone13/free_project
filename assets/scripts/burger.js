const checkbox = document.querySelector('.checkbox')
const burgerMenu = document.querySelector('.burger-menu')

checkbox.addEventListener('click', () => {
    if(checkbox.checked) {
        burgerMenu.style.display = 'block'
    } else {
        burgerMenu.style = ''
    }
})