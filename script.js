const numberButtons = document.querySelectorAll(".num-button");
const operatorButtons = document.querySelectorAll(".operator-button")
const clearButton = document.querySelector("#clear-btn")
const userScreen = document.querySelector("#user-box")
let num1 = 0;
let num2 = 0;
let operator = null;
let currentInput = ""



function clearState() {
    let num1 = 0;
    let num2 = 0;
    let operator = null;
    userScreen.textContent = "";
}

function operation(num1,operator,num2) {
    let result;
    switch(operator) {
        case 'plus': result = num1+num2; break;
        case 'minus': result = num1-num2; break;
        case 'multiply': result = num1*num2; break;
        case 'divide': result = num1/num2; break;
        default: result="ERROR"; break;
    }
    return result;
}

function logButtonId(button) {
    console.log(button.target.id)
}



numberButtons.forEach(button => {
    button.addEventListener("click", logButtonId)
})
operatorButtons.forEach(button => {
    button.addEventListener("click", logButtonId)
})

clearButton.addEventListener("click", clearState)