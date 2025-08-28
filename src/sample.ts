// Build this project with npm run build, then run it with 
// node dist/sample.js
let numbers = [1, 5, 10, 15, 20];

let doubled = numbers.map(num => num * 2);
let filtered = numbers.filter(num => num > 10);

function mutateNumber(num: number): number {
    return num * 2 / 2;
}

let mutated = numbers.map(mutateNumber);
console.log('Doubled:', doubled);
console.log('Filtered:', filtered);
console.log('Mutated:', mutated);

// Generics Example
// This function doesn't care what the type of the list is!
function getFirstElement<T>(list: T[]): T | undefined {
    return list[0];
}

console.log(getFirstElement([1, 2, 3])); // number
console.log(getFirstElement(['a', 'b', 'c'])); // string
