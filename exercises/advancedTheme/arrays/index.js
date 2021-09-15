const numbers = [5, 10, 20, 30, 40, 50, 60];

const shorHighNumbers = numbers.filter(value => value > 10);

console.log(shorHighNumbers);

const persons = [
    {name: 'John', age: 30},
    {name: 'Mary', age: 20},
    {name: 'Jessica', age: 57},
    {name: 'Maria', age: 18},
    {name: 'Caruso', age: 70},
];

const personsWithMoreLetters = persons.filter(obj => obj.name.length >= 4);
const personsOlder = persons.filter(obj => obj.age > 50);
const finalWithLetterA = persons.filter(obj => obj.name.toLowerCase().endsWith('a'))

console.log(personsWithMoreLetters);
console.log(personsOlder);
console.log(finalWithLetterA);