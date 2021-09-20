const numbers = [5, 80, 90, 10, 60, 70, 40, 20, 10];
const total = number.reduce((accumulator, value) => {
    accumulator += value;
    return accumulator;
}, 0);
console.log(total);

const persons = [
    {name: 'John', age: 25},
    {name: 'Doe', age: 30},
    {name: 'Carla', age: 40},
    {name: 'Maria', age: 19},
];

const older = persons.reduce((accumulator, value) => {
    if(accumulator.age > value.age) return accumulator;
    return value;
});
console.log(older)