let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';

function appendNumber(number) {
   
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    display.textContent = currentInput;
}

function appendOperator(operator) {

    if (currentInput === '' && operator !== '.') return;

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
            result = result.toFixed(2); 
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
