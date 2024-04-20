const products = [{
  id: 1,
  name: 'Adidas',
  type: 'เสื้อ',
  price: 100,
  imageUrl: 'https://via.placeholder.com/60x60',
  about: 'about'
}, {
  id: 2,
  name: 'Nike',
  type: 'รองเท้า',
  price: 500,
  imageUrl: 'https://via.placeholder.com/60x60',
  about: 'about'
}, {
  id: 3,
  name: 'Nike',
  type: 'รองเท้า',
  price: 500,
  imageUrl: 'https://via.placeholder.com/60x60',
  about: 'about'
}, {
  id: 4,
  name: 'Nike',
  type: 'รองเท้า',
  price: 500,
  imageUrl: 'https://via.placeholder.com/60x60',
  about: 'about'
}, {
  id: 5,
  name: 'Nike',
  type: 'รองเท้า',
  price: 500,
  imageUrl: 'https://via.placeholder.com/60x60',
  about: 'about'
}]

let text = ''
let count = 0

products.forEach(productsList)

document.getElementById("count").innerHTML = count + ' products'
document.getElementById("viewAll").innerHTML = text

function productsList(product) {
  count++
  text += `<div id='productsList' class="item col mt-4">
<a class="item-link" href="detail.html?id=${product.id}">
  <div class="card border-0">
    <img src="${product.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body p-0 mt-3">
      <h5 class="text-dark">${product.name}</h5>
      <h5 class="text-dark opacity-50">${product.type}</h5>
      <div class="d-flex my-3">
        <h5>$${product.price}</h5>
      </div>
    </div>
  </div>
</a>
</div>`
}

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const searchQuery = urlParams.get('q')

if (searchQuery != null) {
  count = 0
  searchFilter()
  document.getElementById("view").innerHTML = 'SEARCH' + `<h5>"${searchQuery}"</h5>`
  document.getElementById("count").innerHTML = count + ' products'
} else{
  document.getElementById("view").innerHTML = 'PRODUCTS'
}


function searchFilter() {
  let filter, list, a, i, txtValue

  filter = searchQuery.toUpperCase()
  list = document.querySelectorAll('#productsList')

  for (i = 0; i < list.length; i++) {
    a = list[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      count++
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
}