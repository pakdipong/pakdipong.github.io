loadQuantity()

function loadQuantity() {
    const quantity = localStorage.getItem('quantityInCart')
    if (quantity) {
        document.getElementById('quantityInCart').style.display = ''
        document.getElementById('quantityInCart').innerHTML = quantity
    }
}

function search(event) {
    let searchInput = document.getElementById('searchInput').value
    if (searchInput != '' && event.key === 'Enter')
        window.location.assign(`products.html?q=${searchInput}`)
}