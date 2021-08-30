function divisionFizzBuzz(numberFizzBuzz) {
    if (numberFizzBuzz % 3 === 0 && numberFizzBuzz % 5 === 0){
    return 'FizzBuzz'
    }if (numberFizzBuzz % 3 === 0){
        return 'Fizz';
    } if (numberFizzBuzz % 5 === 0){
        return 'Buzz';
    } if (typeof numberFizzBuzz !== 'number'){
        return numberFizzBuzz
    }
    return numberFizzBuzz;
}
for (let i = 0; i <= 100; i++){
     console.log(i, divisionFizzBuzz(i))
}