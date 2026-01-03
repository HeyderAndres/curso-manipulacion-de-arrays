// es un metodo que crea un nuevo array con los elementos que cumplan la condicion indicada en la funcion.
// no modifica el array original y siempre devolvera un nuevo array aunque ningun elemento cumpla la condicion.
// si ningun elemento cumple la condicion entonces el array nuevo sera vacio.

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const newArray = [];

for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >= 6) {
        newArray.push(element);
    }
}

console.log('new aray',newArray);
console.log('original', words);

const rta = words.filter(item => item.length >= 6);
console.log('rta', rta);
console.log("original", words);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const deliveredOrders = orders.filter(item => item.delivered && item.total >= 100);
console.log('delivared orders', deliveredOrders);
