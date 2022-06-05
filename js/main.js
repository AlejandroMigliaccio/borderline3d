let product ={
    id: Number,
    name: String,
    price: Number
}

const itemsAmount = () => {
    debugger
    let total = 0;
    let item = parseInt(prompt('Ingrese la cantidad a llevar: '));
    while(item <= 0){
         item = parseInt(prompt('Por favor ingrese al menos 1 item'));
    }
    return additem(item, total)
}

const additem = (items, total) => {
    debugger
    total += items;
    return total;
}

//let total= itemsAmount()
