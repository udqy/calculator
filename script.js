//create operators
function add(a,b) { return Math.round((a+b)*100)/100; };

function subtract(a,b) { return Math.round((a-b)*100)/100; };

function multiply(a,b) { return Math.round((a*b)*100)/100; }; 

function divide(a,b) {
    if (a===0) return 'undefined';
    if (b===0) return 'undefined';
    return Math.round((a/b)*100)/100;
};

//the main function
function operator(operator,a,b) {
    if (operator == '+') return add(a,b);
    if (operator == '-') return subtract(a,b);
    if (operator == '*') return multiply(a,b);
    if (operator == '/') return divide(a,b);
    else return "Incorrect operator, try again";
}

//interact with index.html

//1. append value to the screen
const screen = document.querySelector('.screen');
const keys = document.querySelector('.grid');

keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return;
    const key = event.target;
    const keyVal = key.textContent;
    const screenVal = screen.textContent
    
    if (screen.textContent===0) {
        screen.textContent=keyVal
    }  else {
        screen.textContent=screenVal+keyVal;
    }
})