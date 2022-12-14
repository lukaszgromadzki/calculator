const displayNum = document.getElementById('displayNum');
const displaySum = document.getElementById('displaySum');
const allClear = document.getElementById('allClear');
const clear = document.getElementById('clear');
const equalBtn = document.getElementById('equalBtn');
const buttons = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('[data-operator]');
const dot = document.getElementById('dotBtn');

let displayValue = '';
let firstNum = '';
let secondNum = '';
let operatorNum = null;

buttons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

operators.forEach((button) => {
    button.addEventListener('click', evaluate)
})

equalBtn.onclick = () => sum();

allClear.onclick = () => clearAll();


function displayNumbers(e){
    if(displayValue.length < 10){
            if(displayValue.includes('.')){
                dot.style.pointerEvents = "none";
                displayValue += e.target.dataset.value;
                displaySum.textContent = displayValue;
            } else {
                displayValue += e.target.dataset.value;
                displaySum.textContent = displayValue;
            }
    } 
}

function evaluate(e){
    firstNum = displaySum.textContent;
    operatorNum = e.target.innerText;
    displayNum.textContent = `${firstNum} ${operatorNum}`;
    displayValue = '';
    dot.style.pointerEvents = "unset";
}


function sum(){
    secondNum = displaySum.textContent;
    if(operatorNum === null) return
    if(operatorNum === '/' && secondNum === '0') {
        clearAll()
        return
    }
    
    displayNum.textContent = `${firstNum} ${operatorNum} ${secondNum} =`;
    let sumDigits = roundNumbers(operate(operatorNum, firstNum, secondNum))
    displaySum.textContent = sumDigits;
    operatorNum = null;
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

function modulo(a,b){
    return a % b;
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
        case "%":
            return modulo(a,b);
    }
}

function roundNumbers(number){
    return Math.round(number * 1000) / 1000;
}
