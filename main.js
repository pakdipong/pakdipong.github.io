function search(event) {
    let searchInput = document.getElementById('searchInput').value
    if(searchInput != '' && event.key==='Enter')
    window.location.assign(`products.html?q=${searchInput}`)
}