function createMyName() {
    const writeName = prompt('Escreva seu nome completo:')

    function showMyName() {
        document.body.innerHTML = `Seu nome é: ${writeName}</br>`
    };
    function contingLetters() {
        document.body.innerHTML += `Seu nome tem ${writeName.length} letras</br>`
    };
    function showSegundLetter() {
        document.body.innerHTML += `A segunda letra do seu nome é: ${writeName.charAt(1)}</br>`
    };
    function showLastLetter() {
        document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${writeName.lastIndexOf('o', 33)}</br>`
    };
    function showLastThreeLetters() {
        document.body.innerHTML += `As últimas 3 letras do seu nome são: ${writeName.slice(15, 18)}</br>`
    };
    function showWords() {
        document.body.innerHTML += `As palavras do seu nome são: ${writeName.split(' ')}</br>`
    };
    function showUppercase() {
        document.body.innerHTML += `Seu nome com letras maiúsculas: ${writeName.toLocaleUpperCase}</br>`
    };
    function showLowercase() {
        document.body.innerHTML += `Seu nome com letras minúsculas: ${writeName.toLocaleLowerCase}`
    };

    showMyName()
    contingLetters()
    showSegundLetter()
    showLastLetter()
    showLastThreeLetters()
    showWords()
    showUppercase()
    showLowercase()
};
createMyName() 