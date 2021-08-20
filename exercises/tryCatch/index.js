function atualHours(data) {
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando insância de Date')
    }

    if(!data) {
        data = new Date
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const date = new Date();
    const hours = atualHours();
    console.log(date, hours);
} catch(error){
    console.log('error' + error.message)
} finally {
    console.log('tenha um bom dia');
}

