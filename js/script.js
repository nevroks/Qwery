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