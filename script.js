const numberButtons = document.querySelectorAll(".num-button");
const operatorButtons = document.querySelectorAll(".operator-button")
const clearButton = document.querySelector("#clear-btn")
const userScreen = document.querySelector("#user-box")
let num1 = 0;
let num2 = 0;
let operator = null;
let currentInput = ""
let lastOperator = null;
let lastNum2 = null;

// Utility functions
function logButtonId(button) {
    console.log(button.target.id)
}



// Clears variables and resets screen ready for new operation
function clearState() {
    num1 = 0;
    num2 = 0;
    operator = null;
    lastOperator = null;
    lastNum2 = null;
    currentInput = "";  // Also reset this
    userScreen.textContent = "";
}


function operation(num1,operator,num2) {
    let result;
    num1 = Number(num1);
    num2 = Number(num2);
    switch(operator) {
        case 'plus': result = num1+num2; break;
        case 'minus': result = num1-num2; break;
        case 'multiply': result = num1*num2; break;
        case 'divide': if (num1==0 && num2==0) {result = "NUH UH"}; break;
        case 'divide': result = num1/num2; break;
        default: result="ERROR"; break;
    }
    if (result != NaN) {
        return result;
    } else {
        return Math.floor(result*1000)/1000;
    }
    
}

function operatorButtonLogic(button) {
    const newOperator = button.target.id;

    if (newOperator === "equals") {
        // Case 1: Repeating the last operation
        if (currentInput === "" && lastOperator && lastNum2 !== null) {
            const result = operation(num1, lastOperator, lastNum2);
            userScreen.textContent = result;
            num1 = result;
            return;
        }

        // Case 2: Normal calculation
        if (currentInput !== "") {
            num2 = Number(currentInput);
            const result = operation(num1, operator, num2);
            
            // Store last operation for potential repeats
            lastOperator = operator;
            lastNum2 = num2;
            
            userScreen.textContent = result;
            num1 = result;
            currentInput = "";
            operator = null;
        }
    } else {
        // Existing operator handling logic
        if (operator === null) {
            operator = newOperator;
            if (currentInput !== "") {
                num1 = Number(currentInput);
                currentInput = "";
            }
        } else {
            if (currentInput !== "") {
                num2 = Number(currentInput);
                num1 = operation(num1, operator, num2);
                currentInput = "";
            }
            operator = newOperator;
        }
    }
}



// Button Listeners

numberButtons.forEach(button => {
    button.addEventListener("click", (button) => {
        // If starting fresh after a calculation
        if (operator === null && currentInput === "") {
            // Reset last operation tracking when starting new number
            lastOperator = null;
            lastNum2 = null;
            currentInput = button.target.id;
        } else {
            currentInput += button.target.id;
        }
        userScreen.textContent = currentInput;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", operatorButtonLogic)
})

clearButton.addEventListener("click", clearState)