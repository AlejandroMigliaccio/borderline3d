import { products } from "../products.js";

let cart = [];

export const addToCart = (productid) => {

    const cartList = document.getElementById("cart-list");

    let item = products.find(item => item.id == productid);
    cart.push(item)
    saveCart()
    let cartItem = document.createElement('li');
    cartItem.id=item.id;
    cartItem.classList.add('cart-list__item');
    cartItem.innerHTML = `
                        <h2 class="cart-list__item__title">${item.name}</h2>
                        <p class="cart-list__item__price">${item.price}</p>
                        <img src="./public/cancel_close_cross_delete_remove_icon.svg" alt="close" id='cross${item.id}'/>`

    cartList.appendChild(cartItem);

    const button = document.getElementById(`cross${item.id}`);
    button.addEventListener('click',()=>{
        remuveItemCard(item.id)    
    })
}

export const remuveItemCard = (p) =>{
    const remuveItem = document.getElementById(`${p}`)
    remuveItem.remove()
}

const saveCart = () =>{
    if(cart.length > 0)
        localStorage.setItem("cart", JSON.stringify(cart)) 
}

export const reloadCart = () =>{
    debugger
    let reCart
    if (reCart= JSON.parse(localStorage.getItem("cart"))) 
    console.log("el carrito tiene ", reCart)
        reCart.forEach(i => {cart.push(i)}) 
        console.log("y se llena ", cart)    
}

