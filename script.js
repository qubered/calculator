const numberButtons = document.querySelectorAll(".num-button");
const operatorButtons = document.querySelectorAll(".operator-button")
const clearButton = document.querySelector("#clear-btn")
const userScreen = document.querySelector("#user-box")
let num1 = 0;
let num2 = 0;
let operator = null;
let currentInput = ""

// Utility functions
function logButtonId(button) {
    console.log(button.target.id)
}



// Clears variables and resets screen ready for new operation
function clearState() {
    num1 = 0;
    num2 = 0;
    operator = null;
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
        case 'divide': result = num1/num2; break;
        default: result="ERROR"; break;
    }
    return result;
}

function operatorButtonLogic(button) {
    const newOperator = button.target.id;

    if (operator === null) {
        // Use previous result OR new input
        if (currentInput !== "") {
            num1 = Number(currentInput);
        }
        // If currentInput is empty, keeps existing num1 (from previous result)
        operator = newOperator;
        currentInput = "";
    } else if (newOperator === "equals") {
        if (currentInput === "") return;  // Prevent empty calculation
        num2 = Number(currentInput);
        const result = operation(num1, operator, num2);
        userScreen.textContent = result;
        num1 = result;  // Store result for future operations
        currentInput = "";  // Clear input but keep num1
        operator = null;
    } else {
        // Chained operator before equals
        if (currentInput !== "") {
            num2 = Number(currentInput);
            num1 = operation(num1, operator, num2);
        }
        operator = newOperator;
        currentInput = "";
    }
}



// Button Listeners

numberButtons.forEach(button => {
    button.addEventListener("click", (button) => {
        // Reset input if starting new number after result
        if (operator === null && currentInput === "") {
            currentInput = button.target.id;
        } else {
            // Prevent multiple decimals
            if (button.target.id === "." && currentInput.includes(".")) return;
            currentInput += button.target.id;
        }
        userScreen.textContent = currentInput;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", operatorButtonLogic)
})

clearButton.addEventListener("click", clearState)