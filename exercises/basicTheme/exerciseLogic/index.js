const numbers = [47, 99];

function pickHigherNumber() {
    const numberMax = Math.max(...numbers)
    return console.log(numberMax)
}
pickHigherNumber()