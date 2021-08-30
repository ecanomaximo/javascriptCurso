function webClock() {
    const pushTimerNumb = document.querySelector('.timerNumber')
    let useSeconds = 0
    let timerHours;

    function getSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    function startHours() {
            timerHours = setInterval(function() {
            useSeconds++;
            pushTimerNumb.innerHTML = getSeconds(useSeconds);
        }, 1000);
    }

    function captureEventClick() {  
        document.addEventListener('click', function(event) {
            const element = event.target

            if(element.classList.contains('start')) {
                pushTimerNumb.classList.remove('paused')
                pushTimerNumb.classList.add('started')
                clearInterval(timerHours);
                startHours();
            }

            if(element.classList.contains('pause')) {
                clearInterval(timerHours);
                pushTimerNumb.classList.add('paused')
            }

            if(element.classList.contains('reset')) {
                clearInterval(timerHours);
                pushTimerNumb.classList.remove('paused')
                pushTimerNumb.classList.remove('started')
                pushTimerNumb.innerHTML = '00:00:00';
                useSeconds = 0;
            }
        });
    }

    captureEventClick()
};
webClock()