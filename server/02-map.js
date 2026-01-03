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

