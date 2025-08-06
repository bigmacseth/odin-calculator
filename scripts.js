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

const listOfNumberButtons = document.querySelectorAll('.num-btn');
const listOfFunctionButtons = document.querySelectorAll('.func-btn');
const listOfOperatorButtons = document.querySelectorAll('.operator-btn');

// iterate over the list of buttons with numbers and add an event listener to insert text into 'numbers'
listOfNumberButtons.forEach(item => {
    let value = item.id;
    item.addEventListener('click', (e) => {
        numbers.insertAdjacentText('beforeend', value);
    })
})

