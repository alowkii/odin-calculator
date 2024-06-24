function append(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const sanitizedValue = display.value.replace(/x/g, '*');
        display.value = eval(sanitizedValue);
    } catch (e) {
        display.value = 'Error';
    }
}