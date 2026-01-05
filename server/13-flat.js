const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// el metodo flat aplana un array de arrays en un solo array, eliminando los niveles de anidacion.
// por defecto aplana un nivel de anidacion, pero podemos especificar la profundidad como argumento.

// forma manal de hacer manualmente con for

const newArray = []
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++)
    newArray.push(array[j])  
}

console.log(newArray);

// usando flat para aplanar el array
const flatArray = matriz.flat();
console.log(flatArray);

const matriz2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, [10, 11, [1,2]]],
];

// aplanando con flat y profundidad 2
const flatArray2 = matriz2.flat(2)
console.log(flatArray2);



// usando recursion para aplanar un array de arrays sin importar la profundidad
function flattenArray(list) {
    let result = [];
    for (let i = 0; i < list.length; i++){
        if (Array.isArray(list[i])){
            result = result.concat(flattenArray(list[i]));
        }
        else {
            result.push(list[i]);
        }
    }
    return result;
}

console.log("for", flattenArray(matriz2));

// tambien podemos usar el metodo reduce para aplanar un array de arrrays

function flattenWithReduce(list) {
    return list.reduce((acc, item) => {
        if (Array.isArray(item)){
            return acc.concat(flattenWithReduce(item));
        }
        else {
            return acc.concat(item);
        }
    }, [])
}

console.log("reduce", flattenWithReduce(matriz2));


// tambien podemos lograrlo con un forEach en vez de un for
function flattenWithForEach(list) {
    let result = [];
    if (!Array.isArray(list)) {
        return [list]
    }
    list.forEach(item => result = result.concat(flattenWithForEach(item)));
    return result;
}

console.log("foreach",flattenWithForEach(matriz2));
