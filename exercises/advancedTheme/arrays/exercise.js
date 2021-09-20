const numbers = [5, 80, 90, 10, 60, 70, 40, 20, 10];
const pairNumbers = numbers.filter(value => value % 2 === 0).map(value => value * 2).reduce((acc, value) => acc + value);
console.log(pairNumbers);