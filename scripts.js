function add(num1, num2) {
    return num1 += num2;
};
function subtract(num1, num2) {
    return num1 -= num2;
};
function multiply(num1, num2) {
    return num1 * num2;
};
function divide(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    switch (operator) {
        case 'add': 
            add(num1, num2);
            break;
        case 'subtract':
            subtract(num1, num2);
            break;
        case 'multiply': 
            multiply(num1, num2);
            break;
        case 'divide':
            divide(num1, num2);
            break;
    };
};

const viewCard = document.querySelector('.view-window');
const numbers = document.querySelector('#numbers');
const memoryCard = document.querySelector('#memory');

const clearEntry = document.querySelector('#clearEntry');
const clearAll = document.querySelector('#clearAll');
const backspace = document.querySelector('#backspace')

const listOfNumberButtons = document.querySelectorAll('.num-btn');
const listOfFunctionButtons = document.querySelectorAll('.func-btn');
const listOfOperatorButtons = document.querySelectorAll('.operator-btn');



let memory = [];

// iterate over the list of buttons with numbers and add an event listener to insert text into 'numbers'
listOfNumberButtons.forEach(item => {
    let value = item.id;
    item.addEventListener('click', () => {
        numbers.insertAdjacentText('beforeend', value);
    });
});

// iterate over the list of buttons with operands and add an event listener to:
// 1. push the text content of 'numbers' into a memory array
// 2. push the operand into the memory array
// 3. clear the 'numbers' element
// 4. display the memory array's contents in an element above the main 'numbers' element
listOfOperatorButtons.forEach(item => {
    let value = item.id;
    item.addEventListener('click', () => {
        memory.push(numbers.textContent)
        memory.push(item.id);
        numbers.textContent = '';
        memoryCard.textContent = memory.join(' ');
    });
});