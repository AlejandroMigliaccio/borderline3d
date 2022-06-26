import { loadCartitems } from "../conponents/cartItem.js"
export const productsList = document.getElementById("product-list");
const cartId = []
const cartName = []

export function loadProductsCards(p) {
    for (const product of p) {
        debugger
           productsList.innerHTML += 
            `<div class='product-list__product-card'>
                <div class="product-list__product-card__title">
                    <img alr=title src="${product.url }"/>
                    <h2>${product.name}<h2>
                </div>
                <div class="product-list__product-card__details">
                    <h3 class="product-list__product-card__details__price">${product.price}</h3>
                    <p class='product-list__product-card__details__description'>${product.description}</p>
                </div>
                <button class='product-list__product-card__button' onclick='(addToCart("${product.id}"))'>Buy</button>
            </div>`
    }
}


function addToCart(product) {
    debugger
    cartId.push(product)
    for (const id of cartId){
        for(const product of products){
            if(id == product.id){
                cartName.push(product.name)
            }
        }

    }
}