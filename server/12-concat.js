// el metodo concat une dos o mas arrays y devuelve uno nuevo con los elementos de los arrays unidos.
// no modifica los arrays originales.

const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [7,8,9];

const result = array1.concat(array2, array3);
console.log(result);


// tambien podemos concatenar arrays usando el spread operator (...)
// para que pueda debemos envolver los arrays en corchetes y usar arrays separados por comas.

const result2 = [...array1, ...array2, ...array3];
console.log(result2);

// si se requiere mutar el array original podemos uar push con el spread operator.
array1.push(...array2, ...array3);
console.log(array1);

