let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';

function appendNumber(number) {
    // Evita começar com múltiplos zeros
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    display.textContent = currentInput;
}

function appendOperator(operator) {
    // Impede adicionar operador no início ou após um erro
    if (currentInput === '' && operator !== '.') return;
    // Impede adicionar múltiplos operadores seguidos
    if (['+', '-', '*', '/'].includes(currentInput[currentInput.length - 1])) {
        currentInput = currentInput.slice(0, -1);
    }
    currentInput += operator;
    display.textContent = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        if (!Number.isInteger(result)) {
            result = result.toFixed(2); // Arredonda para 2 casas decimais
        }
        currentInput = result;
        display.textContent = currentInput;
    } catch {
        display.textContent = 'Erro';
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}
