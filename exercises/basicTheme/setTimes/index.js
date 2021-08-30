function showHours() {
    const data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function consoleMyTimeBreaks() {
    const timer = setInterval(function() {
        console.log(showHours())
    }, 1000);
    
    setTimeout(function() {
        clearInterval(timer);
    }, 3000);
    
    setTimeout(function(){
        console.log('tamo junto')
    }, 4000);
};

consoleMyTimeBreaks()