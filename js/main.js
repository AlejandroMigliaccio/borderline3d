import { products } from "./products.js"; 
import {loadCards} from "./conponents/productCards.js";

loadCards(products);


// import { products } from "./products.js";
// let cart= []
// const loadCards = (products) => {

//     const productList = document.getElementById("product-list");

//     products.forEach(p => {
//         const card = document.createElement("div");
//         card.classList.add("product-list__product-card");
//         card.innerHTML += 
//                        `<div class="product-list__product-card__title">
//                             <img alr=title src="${p.url}"/>
//                             <h2>${p.name}<h2>
//                         </div>
//                         <div class="product-list__product-card__details">
//                             <h3 class="product-list__product-card__details__price">${p.price}</h3>
//                             <p class='product-list__product-card__details__description'>${p.description}</p>
//                         </div>
//                         <button class='product-list__product-card__button' id='button${p.id}'>Buy</button>`
//         productList.appendChild(card);
//         const button = document.getElementById(`button${p.id}`)
//         button.addEventListener('click', ()=>{
//             console.log("entre")
//             cart.push(p.id);
//         })
//     });
// }

// loadCards(products)