// Function to append numbers to the display
function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && number !== '.') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

// Function to choose the operation (+, -, *, /)
function chooseOperation(operator) {
    const display = document.getElementById('display');
    display.textContent += operator;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '0';
}

// Function to compute the result
function compute() {
    const display = document.getElementById('display');
    let expression = display.textContent;

    try {
        const result = eval(expression); // Using eval() for simplicity, not recommended for production
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}