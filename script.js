

function operate(operator,num1,num2) {
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

