// es un metodo que ejecuta una funcion reductora sobre cada elemento del array, devolviendo un unico valor.
// el valor devuelto por la funcion se va acumulando en cada iteracion.
// recibe dos parametros, una funcion que contiene la logica de reduccion y un valor inicial para el acumulador.
// el valor incial es opcional, si no se proporciona, se toma el primer elemento del array como valor incial y se itera desde segundo elemento.
// no modifica el arry original y puede usar como acumulador los tipos de datos primitivos o complejos.

const totals = [1,2,3,4,5];

let sum= 0;
for (let i = 0; i < totals.length; i++) {
    const element = totals[i];
    console.log(element);
    sum += element;
}

console.log('total: ' + sum);

const rta = totals.reduce((sum, item) => sum + item, 0);
console.log('rta: ', rta);


