# Calculator Project
### The Odin project


This project used some AI to help with some of the logic.. I hate maths :) 

## Pseudo Code (with some help from ai for formatting)
```
Initialize:
    num1 = null
    num2 = null
    current_input = ""
    operator = null

When Number Button Pressed(digit):
    current_input += digit

When Operator Button Pressed(op):
    if num1 is null:
        // First operand
        num1 = parse_number(current_input)
        operator = op  // Ignore '=' as first operator
        current_input = ""
    else:
        // Second operand or chained operation
        if current_input is not empty:
            num2 = parse_number(current_input)
            current_input = ""
        else:
            // Handle missing num2 (e.g., "5 + =")
            num2 = num1  // Option: Treat as repeat num1 or set to 0

        if op == "=":
            // Final calculation
            result = calculate(num1, operator, num2)
            display(result)
            reset_state()  // Clear num1, num2, operator
        else:
            // Background calculation for chained ops (e.g., 5 + 3 → × 4)
            result = calculate(num1, operator, num2)
            num1 = result
            operator = op  // Update to new operator
            num2 = null

Function calculate(a, op, b):
    match op:
        case "+": return a + b
        case "-": return a - b
        case "×": return a * b
        case "/": return a / b  // Handle division by zero

Function reset_state():
    num1 = null
    num2 = null
    operator = null
    current_input = ""
```