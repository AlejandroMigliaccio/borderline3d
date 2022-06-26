export const products = [
    { id: 1, name: "Familia", price: "$780", description: "Adorno que representa la union entre padre/madre e hijo/a", url: "./public/Productos/fami.png" },
    { id: 2, name: "Snitch", price: "$595", description: "Snitch de la saga Harry Potter escala 1:1", url: "./public/Productos/harry.png" },
    { id: 3, name: "Llaveros Personalizados", price: "$1100", description: "Llaveros personalizados para las llaves de tu casa o el auto", url: "./public/Productos/lavve.png" },
    { id: 4, name: "Manija cuatriciclo", price: "$1500", description: "Remplazo para palancas de cambio de cuatriciclos", url: "./public/Productos/manija.png" },
    { id: 5, name: "Mortal Kombat Dragon", price: "$2000", description: "Adorno del iconico logo del juego Mortal Kombat", url: "./public/Productos/mk1.png" },
    { id: 6, name: "Soporte laptop", price: "$2950", description: "Soporte regulable para notebooks con antideslizante", url: "./public/Productos/notebook.png" },
    { id: 7, name: "Pikachu", price: "$1250", description: "Adorno de Picachu dorado, hermoso detalle en la impresion", url: "./public/Productos/pika.png" },
    { id: 8, name: "Pokemacetas", price: "$1200", description: "Maceta con forma de pokemon tipo planta", url: "./public/Productos/pokeplant.png" },
    { id: 9, name: "Venus de Jalea", price: "$3000", description: "Estatua de mmmmmmm... gloriosa Venus de jalea, 25 cm de alto", url: "./public/Productos/venus.png" }
]

export const cartId=[];

// const cartId = []
// const cartName = []

// const cartList= document.getElementById("cart-list")


// loadCards()
// loadCardsOfCart(cartName)
// function addToCart(product) {
//     cartId.push(product)
//     for (const id of cartId){
//         for(const product of products){
//             if(id == product.id){
//                 cartName.push(product.name)
//             }
//         }

//     }
// }


// function loadCardsOfCart() {
//     for (const product of cartName) {
//         cartList.innerHTML += "<div class='cart-list__product-card'>"
//             + "<div class='cart-list__product-card__title'>"
//             + "<p>" + product + "<p>"
//             + "<button class='cart-list__product-card__button' ondblclick='(remuvefromCart("+ `${cartId}`+"))'>buy</button>"
//             + "</div>"
//     }
// }

// function remuvefromCart(id){

// }