function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaBack();
        },
        
        pressionaBack() {
            this.display.addEventListener('keypress', e => {
                if (e.keycode === 8) {
                    this.realizaConta();
                }
            });
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', e => {
                if (e.keycode === 13) {
                    this.apagarUm();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta)
                if (!conta) {
                    alert('conta invalida!')
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('conta invalida!')
            }
        },

        clearDisplay() {
            this.display.value = '';
        },
        
        apagarUm() {
            this.display.value = this.display.value.slice(0,-1);    
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) { // arrow function n permite o bind()
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagarUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this)); // Praticando com arrays 24:00 - Basicamente redireciona o this para fora cas chaves 
        },
        btnParaDisplay(valor) {
            this.display.value += valor
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();