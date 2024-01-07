/// Scroll down script---------
const sectionToScroll = document.querySelector(".location1")
document.querySelector(".Scroll-down__button").addEventListener("click", () => {
    console.log("clicked");
    sectionToScroll.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

///----------------------------
/// Slider script--------------
let offset = 0
const sliderLine = document.querySelector('.slider__line')
document.querySelector('.slider__next-btn').addEventListener('click', () => {
    if (offset === 2962) {
        offset = 0
    } else {
        offset = offset + 1481
    }
    sliderLine.style.right = offset + 'px'
})
document.querySelector('.slider__prev-btn').addEventListener('click', () => {
        if (offset <= 0) {
            offset = 2962
        } else {
            offset = offset - 1481
        }
        sliderLine.style.right = offset + 'px'
    })
    ///----------------------------