const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.find(item => item > 2));



const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const rta = products.find(item => item.id === "🍔");
const index = products.findIndex(item => item.id === "🍔");
console.log(index);

console.log(rta);
