
let operator = '';
let previousValue = '';
let currentValue = '';

let clear = document.querySelector("#ac");
let equal = document.querySelector("#equals");
let decimal = document.querySelector("#decimal");

let numbers = document.querySelectorAll(".number-button");
let operators = document.querySelectorAll(".operator-button");

let previousScreen = document.querySelector(".previous");
let currentScreen =document.querySelector(".current");

currentScreen.textContent = '0';

clear.addEventListener('click', function(e){
    firstNumber = '';
    secondNumber = '';
    operator = '';
    previousValue = '';
    currentValue = '';
    currentScreen.textContent = '0';
    previousScreen.textContent = '';
    
});

numbers.forEach((number) => number.addEventListener('click', function(e){
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
}));

operators.forEach((op) => op.addEventListener('click', function(e){
    handleOperator(e.target.textContent);
    previousScreen.textContent = `${previousValue} ${operator}`;
    currentScreen.textContent = currentValue;
}));

equal.addEventListener('click', function(e){
    if(currentValue != '' && previousValue != ''){
        calculate();
        previousScreen.textContent = '';
        currentScreen.textContent = previousValue;
    }    
});

decimal.addEventListener('click', function(){
    addDecimal();
    currentScreen.textContent = currentValue;
});

function handleNumber(number){
    if(currentValue.length <= 5){
        currentValue += number;
    }
}

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
    currentScreen.textContent = '0';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    }else if(operator === '-'){
        previousValue -= currentValue;
    }else if(operator === '*'){
        previousValue *= currentValue;
    }else if(operator === '/'){
        previousValue /= currentValue;
    }
    previousValue = roundNumber(previousValue);

    previousValue = previousValue.toString();
    currentValue = previousValue;

}

function roundNumber(num){
    return Math.round(num * 1000)/ 1000;
}

function addDecimal(){
    if(!currentValue.includes('.')){
        currentValue += '.';
    }
}


