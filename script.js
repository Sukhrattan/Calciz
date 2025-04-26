

let pressedKeyValue = "";
let pressedKeyClass = "";
let currentNumber = "";
let expression = [];
let result = [];
let output = [];
let op_stack = [];

class token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

function keyList() {
    return document.querySelectorAll("button");
}

const key = function handlepressedKey(event) {
    pressedKeyClass = event.target.className;

    if (pressedKeyClass != "symbol") {
        currentNumber += event.target.textContent;
    } else {
        pressedKeyValue = event.target.textContent;
        if (currentNumber != "") {
            expression.push(currentNumber);
            currentNumber = "";
        }
        expression.push(pressedKeyValue);
    }

    

    if (pressedKeyValue == "=") {
        tokenizer();
        parser();
    }
};

function Digit(element) {
    return /^\d+$/.test(element);
}

function Operator(element) {
    return /\+|-|\*|\/|\^/.test(element);
}

const tokenizer = function () {
    result = [];
    expression.forEach((element) => {
        if (Digit(element)) {
            result.push(new token("Digit", element));
        } else if (Operator(element)) {
            result.push(new token("Operator", element));
        }
    });

    console.log("Tokenized:", result);
};

function compareOperators(op1, op2) {
    if (operatorsAssocivity[op2] === "L") {
        return operatorsPrecedence[op1] >= operatorsPrecedence[op2];
    } else {
        return operatorsPrecedence[op1] > operatorsPrecedence[op2];
    }
}

const parser = function () {
    output = [];
    op_stack = [];

    result.forEach((element) => {
        if (element.type === "Digit") {
            output.push(element.value);
        } else if (element.type === "Operator") {
            while (
                op_stack.length > 0 &&
                compareOperators(op_stack[op_stack.length - 1], element.value)
            ) {
                output.push(op_stack.pop());
            }
            op_stack.push(element.value);
        }
    });

    while (op_stack.length > 0) {
        output.push(op_stack.pop());
    }

    console.log("Postfix Output:", output);
    console.log("Stack After:", op_stack);
    
    calculator();
};


function setupListener() {
    const buttons = keyList();
    buttons.forEach((button) => {
        button.addEventListener("click", key);
    });
}

setupListener();
