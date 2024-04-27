let itemsInCart = []

loadCart()

function loadCart() {
  const cartItem = localStorage.getItem('cart-items')
  if (cartItem) {
    itemsInCart = JSON.parse(cartItem)
  }
  showItem()
  summaryPrice()
  quantityInCart()
}

function showItem() {
  let text = ''

  if (itemsInCart.length != 0) {
    itemsInCart.forEach(itemList)
  } else {
    text = "<div class='my-3 fw-medium'>Your cart is currently empty.</div>"
    document.getElementById('checkoutButton').setAttribute("disabled","")
    localStorage.removeItem("cart-items")
  }

  document.getElementById("cartItem").innerHTML = text

  function itemList(item, index) {
    let itemPrice = item.price * item.quantity
    text += `<div class="d-flex py-3 border-bottom">
    <div class="w-25 pe-3">
    <a href="detail.html?id=${item.id}">
      <img src="${item.imageUrl}" class="img-fluid w-100" alt="">
    </a>
    </div>
    <div class="d-flex flex-column w-75">
      <div class="d-flex justify-content-between flex-wrap">
        <div>
        <a class="item-link text-dark" href="detail.html?id=${item.id}">
          <div class="fw-medium">${item.name}</div>
        </a>
          <div class="fw-medium opacity-50">${item.type}</div>
          <div class="d-flex opacity-50">
            <div class="fw-medium">Quantity</div>
            <input type="number" id="quantity" value="${item.quantity}" min="1" max="10" onchange="updateQuantity(${index})" class="text-center border-0 ms-1">
          </div>
        </div>
        <div class="fw-medium">${itemPrice.toLocaleString("en-US", {style:"currency", currency:"USD"})}</div>
      </div>
      <div class="fs-5 fw-medium mt-auto">
        <a onclick="removeItemInCart(${index})" class="btn p-0 border-0 opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
            class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round"
            stroke-linejoin="round" stroke-width="2">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </a>
      </div>
    </div>
  </div>`
  }
}

function quantityInCart() {
  const all = itemsInCart.reduce((acc, item) => acc + item.quantity, 0)
  
  const quantityInCart = document.getElementById('quantityInCart')

  if (all > 0) {
    localStorage.setItem('quantityInCart',all)
    quantityInCart.style.display = ''
  } else {
    localStorage.removeItem('quantityInCart')
    quantityInCart.style.display = 'none'
  }
  quantityInCart.innerHTML = all
}

function summaryPrice() {
  let sumPrice = itemsInCart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  let text
  sumPrice > 0? text = sumPrice.toLocaleString("en-US", {style:"currency", currency:"USD"}): text = '-'
  
  document.getElementById('subtotal').innerHTML = text
  document.getElementById('total').innerHTML = text
}


function removeItemInCart(index) {
  itemsInCart.splice(index, 1)
  localStorage.setItem('cart-items', JSON.stringify(itemsInCart))
  loadCart()
}

function updateQuantity(index) {
  const quantity = document.querySelectorAll('#quantity')[index].value
  if (quantity != '') {
    itemsInCart[index].quantity = parseInt(quantity)
  } else {
    itemsInCart[index].quantity = 1
  }
  localStorage.setItem('cart-items', JSON.stringify(itemsInCart))
  loadCart()
}

function goToCheckout(){
  window.location.assign('checkout.html')
}