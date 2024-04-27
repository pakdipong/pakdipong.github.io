import { products } from './products-data.js'

let text = ''


products.slice(3,8).forEach(productsList)

document.getElementById("slider").innerHTML = text

function productsList(product) {
  text += `<div id='productsList' class="item col mt-4">
<a class="item-link" href="detail.html?id=${product.id}">
  <div class="card border-0">
    <img src="${product.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body p-0 mt-3">
      <div class="text-dark fw-medium">${product.name}</div>
      <div class="text-dark opacity-50 fw-medium">${product.type}</div>
      <div class="mt-3">
        <div class="text-dark fw-medium">$${product.price}</div class =>
      </div>
    </div>
  </div>
</a>
</div>`
}

const slider = document.querySelector('.slider')
const firstSlide = slider.querySelectorAll('.item')[0]
const arrowIcons = document.querySelectorAll('.new-products span')

let firstSlideWidth = firstSlide.clientWidth

window.addEventListener("resize", () => {
    firstSlideWidth = firstSlide.clientWidth
})

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (icon.id === 'right') {
            slider.scrollLeft += firstSlideWidth
        } else {
            slider.scrollLeft -= firstSlideWidth
        }
    })
})
