

const locations = [
    { id: "1", name: "palermo", price: 3000 },
    { id: "2", name: "belgrano", price: 3500 },
    { id: "3", name: "colegiales", price: 4000 },
    { id: "4", name: "san telmo", price: 4500 }
];

const property_kind = [];

function Tazacion(id, agente, monto) {
    this.id = id;
    this.agente = agente;
    this.monto = monto;
    this.comision = 1.03;
    this.iva= 1.21;
}
const appraisals = []; //tazaciones

alert("Bienvenidos a BorderLine");
let cLocation = prompt("ingrese el barrio donde se encuentra la propiedad (Palermo, Belgrano, Colegiales o San Telmo): ").toLocaleLowerCase();
let propKind = prompt("Ingrese que timpo de propiedad es (departamento o casa): ").toLocaleLowerCase();
let area = prompt("Ingrese los metros cuadrados que posee: ");

function loadPropertyKind() {
    property_kind.push({ id: 1, name: "casa", value: 1.1 });
    property_kind.push({ id: 2, name: "departamento", value: 1.03 });
    property_kind.push({ id: 3, name: "cochera", value: 1.01 });
    property_kind.push({ id: 4, name: "lote", value: 1.05 });
}
debugger
loadPropertyKind();

const precio = locations.filter((a) => a.name.includes(cLocation));
const kind = property_kind.filter((a) => a.name.includes(propKind));

console.log(precio[0].price,"precio de la zona");
console.log(kind[0].value, "precio de tipo propiedad");

console.log(propAppraisal(precio[0].price, parseInt(area), kind[0].value))

function propAppraisal(locationProp, areaProp, kindProp){
    debugger
     return (locationProp * areaProp) * kindProp
    };



