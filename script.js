// let carouselImages = document.querySelectorAll(".slideshow img")
// let mql = window.matchMedia("(max-width: 576px)")
// let prevButton = document.querySelector("#prevBtn")
// let nextButton = document.querySelector("#nextBtn")
// let counter = 0
// let size = carouselImages[0].clientWidth

// carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"

// nextButton.addEventListener('click',()=>{
//     if (counter >= 1){
//         counter = -1
//     }
//     carouselSlide.style.transition = "transform 0.4s ease-in-out"
//     counter ++
//     carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"
// })

// prevButton.addEventListener('click',()=>{
//     if (counter <= 0){
//         counter = 2
//     }
//     carouselSlide.style.transition = "transform 0.4s ease-in-out"
//     counter --
//     carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)"
// })




let carouselSlide = document.querySelector(".slideshow")

let scroll = document.querySelector(".scroll")
let activeBtn = document.querySelector('#activeBtn')
let cookies = document.querySelector('.cookies')


scroll.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    carouselSlide.scrollIntoView({ block: 'end',  behavior: 'smooth' })
})

activeBtn.addEventListener('click', () => {
    cookies.classList.add('hide')
})


let login = document.querySelector('#logIn')
let loginModal = document.querySelector(".modal")
let modal__close = document.querySelector(".modal__close")
let modal__content = document.querySelector(".modal__content")
login.addEventListener("click", openLogin)
function openLogin() {
    loginModal.classList.remove("hide")
}

modal__close.addEventListener('click', closeModal)
function closeModal() {
    loginModal.classList.add("hide")
}

loginModal.addEventListener('click', closeBackModal)

function closeBackModal() {
    loginModal.classList.add('hide')
}

modal__content.addEventListener('click', function(e){
    e.stopPropagation()
})


let cart = document.querySelector('#myCart')
let open =  1
let cartModal = document.querySelector('.cartModal')
cart.addEventListener("click", openCart)
function openCart() {
    cartModal.classList.remove("hide")

}
function closeCart() {
    cartModal.classList.add("hide")

}

// modal__close.addEventListener('click', closeModal)
// function closeModal() {
//     loginModal.classList.add("hide")
// }

// loginModal.addEventListener('click', closeBackModal)

// function closeBackModal() {
//     loginModal.classList.add('hide')
// }

// modal__content.addEventListener('click', function(e){
//     e.stopPropagation()
// })

let burgerMenu = document.querySelector('#burger')
let bigModal = document.querySelector('.bigModal')
let closeBigModal = document.querySelector('#closeBigModal')
let body = document.querySelector('.body')

burgerMenu.addEventListener('click', () => {
    bigModal.classList.remove('hide')
    // window.scrollTo(0, 0)1   

})
closeBigModal.addEventListener('click', () => {
    bigModal.classList.add('hide')
    
})