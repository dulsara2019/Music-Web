if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
   ready()
}

function ready(){
    var removeCartItemBtn =  document.getElementsByClassName("btn-danger")
    for (var i = 0; i < removeCartItemBtn.length; i++){
        var button = removeCartItemBtn[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName("cart-quantity-input")
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartBtns = document.getElementsByClassName("addToCart_btn")
    for (var i = 0; i < addToCartBtns.length; i++){
        var button = addToCartBtns[i]
        button.addEventListener('click', addToCartClicked)
    }

}
function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal
}

function quantityChanged(event){
    var input = event.target
    if (isNan(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var tittle = shopItem.getElementsByClassName('itemName')[0].innerText
    var price = shopItem.getElementsByClassName('itemPrice')[0].innerText
    var imgsrc = shopItem.getElementsByClassName('item_img')[0].src
    addItemToCart(tittle,price,imgsrc)
    updateCartTotal()
}

function addItemToCart(tittle,price,imgsrc){
    var cartRow = document.createElement('div')
    cartRowContent.classList.add("cart-row")
    var cartItems = document.getElementsByClassName("cart-items")[0]
    var cartRowContent = `
            <div class="cart-item cart-column">
            <img class="cart-item-image" src="${Images/Shirt.png}" width="100" height="100">
            <span class="cart-item-title">T-Shirt</span>
        </div>
        <span class="cart-price cart-column">$19.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div> `
        cartRow.innerHTML = cartRowContent
    cartItems.append(cartRow)
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change",quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName("cart-price")[0]
        var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

