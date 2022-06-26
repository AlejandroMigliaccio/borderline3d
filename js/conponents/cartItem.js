export const cartList = document.getElementById("cart-list");

export function loadCartitems(c){
    for (const item of c)
        `<div id="cart-list" class="cart-list">
            <div class="cart-list__item">
                <h2 class="cart-list__item__title">${item.name}</h2>
                <p class="cart-list__item__price">${item.price}</p>
                <img src="./public/cancel_close_cross_delete_remove_icon.svg" alt="close"/>
            </div>
        </div>`
}

