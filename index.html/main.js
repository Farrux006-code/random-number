let btnShow = document.querySelector('.btn-show')
let btnClose = document.querySelector(".close")
let modal = document.querySelector(".modal")

btnShow.addEventListener('click', () => {
    modal.classList.toggle("show")
})