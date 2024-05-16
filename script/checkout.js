let itemsInCart = []

loadCart()

function loadCart() {
  const cartItem = localStorage.getItem('cart-items')
  if (cartItem) {
    itemsInCart = JSON.parse(cartItem)
    yourCart()
  } else {
    location.replace("cart.html")
  }
}

function yourCart() {
  let text = ''
  let total = 0
  itemsInCart.forEach(itemList)
  document.getElementById("yourCart").innerHTML = text
  document.getElementById("subtotal").innerHTML = total.toLocaleString("en-US", { style: "currency", currency: "USD" })
  document.getElementById("total").innerHTML = total.toLocaleString("en-US", { style: "currency", currency: "USD" })

  function itemList(item) {
    let itemPrice = item.price * item.quantity
    total += itemPrice
    text += `<div class="d-flex py-2">
        <div class="col-2 position-relative">
          <img src="${item.imageUrl}" alt="" class="img-fluid w-100">
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
            ${item.quantity}
          </span>
        </div>
        <div class="col-10 d-flex justify-content-between align-items-center">
          <div class="p-2">
            <div>${item.name}</div>
          </div>
          <div>${itemPrice.toLocaleString("en-US", { style: "currency", currency: "USD" })}</div>
        </div>
      </div>`
  }
}