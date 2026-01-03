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


