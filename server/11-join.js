// join es un metodo que une todos los elementos de un array en un solo string, separados por un separador especifico.
// si no se especifica separados automaticamente se usa la coma (,).
// siempre devuelve un string y no modifica el array original.

//split es un metodo que divide un string en un array de subcadenas, segun el separador especificado

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join('--'));

const title = 'Curso de manipulacion de arrays';
console.log(title.split(' '));

