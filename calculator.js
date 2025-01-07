let displayValue = '';

function addToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString(); // Store result for further operations
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}