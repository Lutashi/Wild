let carouselSlide = document.querySelector(".slideshow")
// let carouselImages = document.querySelectorAll(".slideshow img")
// let mql = window.matchMedia("(max-width: 576px)")
// let prevButton = document.querySelector("#prevBtn")
// let nextButton = document.querySelector("#nextBtn")


let scroll = document.querySelector(".scroll")
let activeBtn = document.querySelector('#activeBtn')
let cookies = document.querySelector('.cookies')
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

scroll.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out"
    carouselSlide.scrollIntoView({ block: 'end',  behavior: 'smooth' })
})

activeBtn.addEventListener('click', () => {
    cookies.classList.add('hide')
})