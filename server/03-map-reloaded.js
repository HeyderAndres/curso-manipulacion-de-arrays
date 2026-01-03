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

console.log('original ', orders);

const rta = orders.map (item => item.total);
console.log(`respuesta ${rta}`);

// en esta caso estamos modificando e objeto original porque map trabaja con referencia
// const rta2 = orders.map(item => {
//     item.tax = .19 * item.total;
//     return item;
// });

// console.log('rta2 ', rta2);
// console.log("original ", orders);


const rta3 = orders.map((item) => {
  return {...item, // creamos un nuevo objeto con spread operator, evitando modificar el objeto original.
    tax: 0.19 * item.total
  } 
});

console.log("rta3 ", rta3);
console.log("original ", orders);
