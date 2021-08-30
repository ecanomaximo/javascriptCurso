function createNumeric() {
    const captureNumbered = Number(prompt('Enter a number:'));
    function alteredNumered() {
        return document.getElementById('numberCapsule').innerHTML = captureNumbered
    };
    function alteredText() {
        return document.getElementById('textCapsule').innerHTML = `Square root: ${captureNumbered ** 0.5}`
    };
    function booleanInteger() {
        return document.getElementById('integerCapsule').innerHTML = `${captureNumbered} is integer: ${Number.isInteger(captureNumbered)}`
    };
    function isNaNboolean() {
        return document.getElementById('isNumberCapsule').innerHTML = `is NaN: ${Number.isNaN(captureNumbered)}`
    };
    function showRoundDown() {
        return document.getElementById('roundDownCapsule').innerHTML = `Rounding down: ${Math.floor(captureNumbered)}`
    };
    function showRoundUp() {
        return document.getElementById('roundUpCapsule').innerHTML = `Rounding up: ${Math.ceil(captureNumbered)}`
    };
    function twoDecimalPlaces() {
        return document.getElementById('decimalPlacesCapsule').innerHTML = `Rounding up: ${captureNumbered.toFixed(2)}`
    };
    alteredNumered()
    alteredText()
    booleanInteger()
    isNaNboolean()
    showRoundDown()
    showRoundUp()
    twoDecimalPlaces()
};
createNumeric()