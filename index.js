const display = document.getElementById("display");

function appendToDisplay(input) {
    // Avoid multiple operators or starting with an operator
    const lastChar = display.value.slice(-1);
    if (['+', '-', '*', '/'].includes(input) && (display.value === '' || ['+', '-', '*', '/'].includes(lastChar))) {
        return;
    }

    // Avoid multiple decimal points in a number
    if (input === '.' && display.value.slice(-1) === '.') {
        return;
    }

    // If there is already a decimal point, prevent another one in the same number
    if (input === '.' && display.value.split(/[\+\-\*\/]/).pop().includes('.')) {
        return;
    }

    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = Function('"use strict";return (' + display.value + ')')();
    } catch (error) {
        display.value = 'Error';
    }
}
