import { products } from './products-data.js'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const productId = parseInt(urlParams.get('id'))

let itemsInCart = []
let productData = []

loadCart()

products.forEach(productDetail)
function productDetail(product) {
    if (productId === product.id) {
        productData = product
        document.getElementById('productImg').src = product.imageUrl
        document.getElementById('name').innerHTML = product.name
        document.getElementById('type').innerHTML = product.type
        document.getElementById('price').innerHTML = '$' + product.price
        document.getElementById('about').innerHTML = product.about
        document.getElementById('review').innerHTML = 'Reviews' + ' (' + product.review + ')'
    }
}

const addToCartButton = document.getElementById('addToCart')

addToCartButton.addEventListener('click', () => {
    const itemIndex = itemsInCart.findIndex(
        item => item.id === productData.id
    )
    if (itemIndex >= 0) {
        itemsInCart[itemIndex].quantity ++
    } else {
        productData.quantity = 1
        itemsInCart.push(productData)
    }

    localStorage.setItem('cart-items', JSON.stringify(itemsInCart))
    window.location.assign('cart.html')
})

function loadCart() {
    const cartItem = localStorage.getItem('cart-items')
    if (cartItem) {
      itemsInCart = JSON.parse(cartItem)
    }
  }