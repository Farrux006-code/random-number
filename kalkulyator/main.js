let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let h1 = document.querySelector("h1")
let plyus = document.querySelector(".plyus")
let minus = document.querySelector(".minus")
let bolish = document.querySelector(".bolish")
let kopaytirish = document.querySelector(".kopaytirish")



plyus.addEventListener('click', () => {
    let a = +input1.value
    let b = +input2.value
    h1.innerHTML = a + b
})
minus.addEventListener('click', () => {
    let a = +input1.value
    let b = +input2.value
    h1.innerHTML = a - b
})
bolish.addEventListener('click', () => {
    let a = +input1.value
    let b = +input2.value
    h1.innerHTML = a / b
})
kopaytirish.addEventListener('click', () => {
    let a = +input1.value
    let b = +input2.value
    h1.innerHTML = a * b
})