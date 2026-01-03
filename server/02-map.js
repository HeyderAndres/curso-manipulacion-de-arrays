// es un metodo que crea un nuevo array con la misma cantidad de elementos del array original
// el nuevo array contiene los elementos modificados segun la funcion que se le pase.
// tener presente que si los elementos del array no son primitivos (number, string, boolean) entonces
// map trabaja con referencia y si modifica el obejeto dentro de la funcion, se modifica el objeto original.

const letters = ['a', 'b', 'c', 'd', 'e'];
const newArray = [];

for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    newArray.push(element.toUpperCase())
}
console.log(`Original ${letters}`);

console.log(`new ${newArray}`);


const mappedArray = letters.map(item => item.toUpperCase());
console.log(`mapped ${mappedArray}`);
console.log(`Original ${letters}`);

