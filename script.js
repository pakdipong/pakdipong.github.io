const slider = document.querySelector('.slider')
const firstSlide = slider.querySelectorAll('.item')[0]
const arrowIcons = document.querySelectorAll('.new-products span')

let firstSlideWidth = firstSlide.clientWidth

window.addEventListener("resize", () => {
    firstSlideWidth = firstSlide.clientWidth
})

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if(icon.id === 'right') {
            slider.scrollLeft += firstSlideWidth
        } else {
            slider.scrollLeft -= firstSlideWidth
        }
    })
})