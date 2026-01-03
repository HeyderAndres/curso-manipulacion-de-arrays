// es un metodo que valida que todos los elementos del array cumplan con la condicion indicada en la funcion.
// retorna true o false


const numbers = [1, 2, 3, 4, 5, 6];

const rta = numbers.every(item => item < 10);
console.log(rta);
