const displayNum = document.getElementById('displayNum');
const displaySum = document.getElementById('displaySum');
const allClear = document.getElementById('allClear');
const clear = document.getElementById('clear');
const modulo = document.getElementById('modulo');
const equalBtn = document.getElementById('equalBtn');
const buttons = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('[data-operator]');

let displayValue = '';
let firstNum = '';
let secondNum = '';
let operatorNum = '';

buttons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

operators.forEach((button) => {
    button.addEventListener('click', evaluate)
})

equalBtn.onclick = () => sum();
allClear.onclick = () => {
    firstNum = '';
    secondNum = '';
    operatorNum = '';
    displayValue = '';
    displayNum.textContent = '';
    displaySum.textContent = '0';
}


function displayNumbers(e){
    displayValue += e.target.dataset.value;
    displaySum.textContent = displayValue;
}

function evaluate(e){
    // firstNum = displaySum.textContent;
    firstNum = displayValue;
    console.log(e)
    operatorNum = e.target.innerText;
    displayNum.textContent = `${firstNum} ${operatorNum}`;
    displayValue = '';
    console.log(secondNum)
    displaySum.textContent = secondNum;
    
}


function sum(){
    secondNum = displaySum.textContent;
    displayNum.textContent = `${firstNum} ${operatorNum} ${secondNum}`;
    console.log(secondNum, firstNum, operatorNum)
    // displaySum.textContent = operate(firstNum, secondNum, operatorNum)
    let sumDigits = operate(operatorNum, firstNum, secondNum)
    displaySum.textContent = sumDigits;
}


function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(operator, a, b){
    a = Number(a);
	b = Number(b);
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}
