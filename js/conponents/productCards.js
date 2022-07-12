import { addToCart, reloadCart } from "./cartItem.js";

const URL = `js/server/data.json`;
const products = []

export const getData = ()=> {
    fetch(URL)
    .then(res => res.json())
    .then((data) => {
        loadCards(data.products)
    })
    .catch(err => console.error(err))
}

export const loadCards = (products) => {
    reloadCart()
    const productList = document.getElementById("product-list");

    products.forEach(p => {
        const card = document.createElement("div");
        card.classList.add("product-list__product-card");
        card.innerHTML += 
                       `<div class="product-list__product-card__title">
                            <img alr=title src="${p.url}"/>
                            <h2>${p.name}<h2>
                        </div>
                        <div class="product-list__product-card__details">
                            <h3 class="product-list__product-card__details__price"> $ ${p.price}</h3>
                            <p class='product-list__product-card__details__description'>${p.description}</p>
                        </div>
                        <button class='product-list__product-card__button' id='button${p.id}'>Comprar</button>`
        productList.appendChild(card);
        const button = document.getElementById(`button${p.id}`)
        button.addEventListener('click', ()=>{
            addToCart(p.id);
            confirmado();
        })
    });
}

const confirmado = ()=>{    
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El producto se ha añadido a su carrito',
        showConfirmButton: false,
        timer: 1500
      })
}