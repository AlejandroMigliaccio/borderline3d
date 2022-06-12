const iva = 1.21
const commission = 1.03

const locations = [
    { id: "1", name: "palermo", price: "3000" },
    { id: "2", name: "belgrano", price: "3500" },
    { id: "3", name: "colegiales", price: "4000" },
    { id: "4", name: "san telmo", price: "4500" }
]

const property_kind = []

const appraisals = [] //tazaciones
let hardcore = "belgrano"

loadPropertyKind();

function loadPropertyKind() {
    property_kind.push({ id: 1, name: "casa", value: 1.1 });
    property_kind.push({ id: 2, name: "departamento", value: 1.03 });
    property_kind.push({ id: 3, name: "cochera", value: 1.01 });
    property_kind.push({ id: 4, name: "lote", value: 1.05 });
}

console.log(property_kind)

const precio = locations.filter((a) => a.name.includes(hardcore));
let flag=0
locations.forEach(element => {
    debugger
    while (flag == 0) {
        if (element.name === hardcore){
            flag = 1;
        }
    }
    return element.price;
});
console.log(precio[0].price)



