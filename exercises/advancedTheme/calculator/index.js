function createCalculator() {
    return {
        display: document.querySelector('.calculatorDisplay'),

        start() {
            this.clickButtons();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', event => {
                if(event.keyCode === 13) {
                    this.doAccount();
                }
            });
        },

        delDisplayNum() {
            this.display.value = this.display.value.slice(0, -1)
        },

        clearDisplay() {
            this.display.value = '';
        },

        doAccount() {
            let result = this.display.value; 

            try {
                result = eval(result);

                if(!result) {
                    alert('Invalid Account');
                    return;
                }

                this.display.value= result;
            } catch(error) {
                if(!result) {
                    alert('Invalid Account');
                    return;
                }
            }
        },

        clickButtons() {
            document.addEventListener('click', event => {
                const elementEvent = event.target;

                if(elementEvent.classList.contains('btn-num')) {
                    this.btnForDisplay(elementEvent.innerText);
                }

                if(elementEvent.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(elementEvent.classList.contains('btn-del')) {
                    this.delDisplayNum();
                }

                if(elementEvent.classList.contains('btn-equal')){
                    this.doAccount();
                }
            });
        },
        btnForDisplay(value) {
            this.display.value += value;
        }
    };
}

const calculator = createCalculator();
calculator.start();