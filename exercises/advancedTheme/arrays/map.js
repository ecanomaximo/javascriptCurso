const persons = [
    {name: 'John', age: 25},
    {name: 'Doe', age: 30},
    {name: 'Carla', age: 40},
    {name: 'Maria', age: 19},
];

const names = persons.map(obj => obj.name);
const removeNames = persons.map(obj => ({ age: obj.age }));
const addId = persons.map((obj, index) => {
    const newObj = { ...obj };
    newObj.id = index;
    return newObj;
});

console.log(names);
console.log(removeNames);
console.log(addId);