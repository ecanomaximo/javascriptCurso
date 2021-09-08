function Calculator() {
    this.display = document.querySelector('.calculatorDisplay');
    
    this.start = () => {
        this.clicksCapture();
        this.enterCapture();
    }

    this.enterCapture = () => {
        this.display.addEventListener('keypress', event => {
            if(event.keyCode === 13) {
                this.equal();
            }
        });
    }

    this.clicksCapture = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if(element.classList.contains('btn-num')) this.addDisplayNumber(element);
            if(element.classList.contains('btn-clear')) this.clear();
            if(element.classList.contains('btn-del')) this.del();
            if(element.classList.contains('btn-equal')) this.equal();
        });
    };

    this.equal = () => {
        try {
            const captureAccount = eval(this.display.value);

            if(!captureAccount) {
                alert('Invalid');
                return
            }

            this.display.value = captureAccount;
        } catch(error) {alert(error.message);
            return;
        }
    }

    this.addDisplayNumber = element => {
        this.display.value += element.innerText;
        this.display.focus();
    };
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value.slice(0, -1);

}

const calculator = new Calculator();
calculator.start();