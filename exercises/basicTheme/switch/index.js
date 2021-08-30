const getElementCalendar = document.querySelector('.hostCalendar');
const atualDate = new Date();

function calendarConstructorDays(weekDay) {
    let scheduleDays;

    switch(weekDay) {
        case 0:
            scheduleDays = 'Domingo'
            return scheduleDays;
        case 1:
            scheduleDays = 'Segunda-Feira'
            return scheduleDays;
        case 2:
            scheduleDays = 'Terça-Feira'
            return scheduleDays;
        case 3:
            scheduleDays = 'Quarta-Feira'
            return scheduleDays;
        case 4:
            scheduleDays = 'Quinta-Feira'
            return scheduleDays;
        case 5:
            scheduleDays = 'Sexta-Feira'
            return scheduleDays;
        case 6:
            scheduleDays = 'Sábado'
            return scheduleDays;
    }
}

function calendarConstructorMonths(numberMonths) {
    let scheduleMonth;

    switch(numberMonths) {
        case 0:
            scheduleMonth = 'Janeiro'
            return scheduleMonth;
        case 1:
            scheduleMonth = 'Fevereiro'
            return scheduleMonth;
        case 2:
            scheduleMonth = 'Março'
            return scheduleMonth;
        case 3:
            scheduleMonth = 'Abril'
            return scheduleMonth;
        case 4:
            scheduleMonth = 'Maio'
            return scheduleMonth;
        case 5:
            scheduleMonth = 'Junho'
            return scheduleMonth;
        case 6:
            scheduleMonth = 'Julho'
            return scheduleMonth;
        case 7:
            scheduleMonth = 'Agosto'
            return scheduleMonth;
        case 8:
            scheduleMonth = 'Setembro'
            return scheduleMonth;
        case 9:
            scheduleMonth = 'Outubro'
            return scheduleMonth;
        case 10:
            scheduleMonth = 'Novembro'
            return scheduleMonth;
        case 11:
            scheduleMonth = 'dezembro'
            return scheduleMonth;
    }
};

function pickIntDate(atualDate) {
    const weekDay = atualDate.getDay();
    const numberMonths = atualDate.getMonth();

    const dayName = calendarConstructorDays(weekDay);
    const monthName = calendarConstructorMonths(numberMonths);

    return (
        `${dayName}, ${atualDate.getDate()} de ${monthName}` +
        ` de ${atualDate.getFullYear()} ${atualDate.getHours()}:${atualDate.getMinutes()}`
    )
};

getElementCalendar.innerHTML = pickIntDate(atualDate);