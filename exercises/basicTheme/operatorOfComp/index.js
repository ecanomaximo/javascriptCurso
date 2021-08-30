const form = document.querySelector('#form');
    
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputWeightCapture = event.target.querySelector('#inputWeight');
    const inputHeightCapture = event.target.querySelector('#inputHeight');

    const weightCaptureValue = Number(inputWeightCapture.value);
    const heightCaptureValue = Number(inputHeightCapture.value);

    if(!weightCaptureValue) {
        setResult('Peso inválido', false);
        return;
    };
    if(!heightCaptureValue) {
        setResult('Altura inválida', false);
        return;
    }; 
    
    const captureImc = calculateImc(weightCaptureValue, heightCaptureValue);
    const levelImc = getLevelImc(captureImc);

    const message = `Seu IMC é ${captureImc} (${levelImc}).`;

    setResult(message, true);

});

function getLevelImc(captureImc) {
    const levels = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1', 
        'Obesidade grau 2', 
        'Obesidade grau 3'
    ];

    if(captureImc >= 39.9) {
        return levels[5];
    } 
    if (captureImc >= 34.9) {
        return levels[4];
    } 
    if (captureImc >= 29.9) {
        return levels[3];
    } 
    if (captureImc >= 24.9) {
        return levels[2];
    } 
    if (captureImc >= 18.5) {
        return levels[1];
    } 
    if (captureImc < 18.5) {
        return levels[0];
    }
};

function calculateImc(weightCaptureValue, heightCaptureValue){
    const resultCalculated = weightCaptureValue / heightCaptureValue ** 2;
    return resultCalculated.toFixed(2);
}

function createElementSpan() {
    const elementSpan = document.createElement('span');
    return elementSpan;
}

function setResult (message, messageValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const elementSpan = createElementSpan();

    if (messageValid) {
        elementSpan.classList.add('resultSpan');
    } else {
        elementSpan.classList.add('resultBadSpan');
    }
    


    elementSpan.innerHTML = message;
    result.appendChild(elementSpan)
};