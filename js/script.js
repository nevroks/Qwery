/// Scroll down script---------
const sectionToScroll = document.querySelector(".location1")
document.querySelector(".Scroll-down__button").addEventListener("click", () => {
    sectionToScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

///----------------------------
/// Slider script--------------
let count = 0
let width;
const slides = document.querySelectorAll('.slider__line-slide')
const sliderLine = document.querySelector('.slider__line')
const rollSliser = () => {
    sliderLine.style.right = width * count + 'px'
}

function changeSize() {
    width = document.querySelector('.slider-wrapper').offsetWidth

    sliderLine.style.width = width * slides.length + 'px'
    slides.forEach(slide => {
        slide.style.width = width + "px"
    })
    rollSliser()
}
changeSize()

window.addEventListener('resize', changeSize)

document.querySelector('.slider__next-btn').addEventListener('click', () => {
    count++
    if (count >= slides.length) {
        count = 0
    }
    rollSliser()
})
document.querySelector('.slider__prev-btn').addEventListener('click', () => {
    count--
    if (count <= 0) {
        count = slides.length - 1
    }
    rollSliser()
})

///----------------------------
/// Popup script---------------
function showPopUp() {
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = "15px"
}

function closePopUp() {
    document.body.style.overflow = "visible"
    document.body.style.paddingRight = "0"
}
document.querySelectorAll(".pop-up").forEach((el) => {
    el.addEventListener('click', () => {
        closePopUp()
        el.classList.add("none")
    })
})
document.querySelectorAll(".pop-up__content").forEach((el) => {
    el.addEventListener("click", (e) => {
        e.stopPropagation()
    })
})
const popUp1 = document.querySelector('.location1__pop-up')
document.querySelector('.readMore-button1').addEventListener("click", (e) => {
    showPopUp()
    popUp1.classList.remove("none")
})
const popUp2 = document.querySelector('.location2__pop-up')
document.querySelector('.readMore-button2').addEventListener("click", (e) => {
    showPopUp()
    popUp2.classList.remove("none")
})
const popUp3 = document.querySelector('.location3__pop-up')
document.querySelector('.readMore-button3').addEventListener("click", (e) => {
    showPopUp()
    popUp3.classList.remove("none")
})
const popUp4 = document.querySelector('.location4__pop-up')
document.querySelector('.readMore-button4').addEventListener("click", (e) => {
    showPopUp()
    popUp4.classList.remove("none")
})
const popUp5 = document.querySelector('.location5__pop-up')
document.querySelector('.readMore-button5').addEventListener("click", (e) => {
        showPopUp()
        popUp5.classList.remove("none")
    })
    ///----------------------------