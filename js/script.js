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
    if (offset === 200) {
        offset = 0
    } else {
        offset = offset + 100
    }
    sliderLine.style.right = offset + '%'
})
document.querySelector('.slider__prev-btn').addEventListener('click', () => {
        if (offset <= 0) {
            offset = 200
        } else {
            offset = offset - 100
        }
        sliderLine.style.right = offset + '%'
    })
    ///----------------------------