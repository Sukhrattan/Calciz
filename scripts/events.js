// import { tokens } from "./tokenizer";


let pressedKeyValue = "";
let pressedKeyClass = "";
let currentNumber = "";
let expression = [];




function keyList() {
    return document.querySelectorAll("button");
}

const key = function handlepressedKey(event) {
    pressedKeyClass = event.target.className;
    
    if(pressedKeyClass != "symbol") {

        currentNumber += event.target.textContent;
        document.querySelector(".screen").innerHTML=currentNumber;

    } else {
        pressedKeyValue = event.target.textContent;
        
        if (currentNumber != "") {
            expression.push(currentNumber);
            currentNumber = "";

        }
        if(pressedKeyValue=="AC"){
            expression=[];
            calculation_stack=[];
            document.querySelector(".screen").innerHTML=" ";
        }
        else if(pressedKeyValue=="C"){
            pressedKeyValue="";
            expression.pop();
            calculation_stack=[];
            document.querySelector(".screen").innerHTML=" ";
        }
        
        else{
            lengg = expression.length;
            if(!(Operator(expression[lengg-1]))){
            document.querySelector(".screen").innerHTML=pressedKeyValue;
            expression.push(pressedKeyValue);
        }
        }
    }
    
    

    if (pressedKeyValue == "=") {
        const object = new tokens(null,null);
        object.expression=expression;
        const result = object.tokenize(expression);
        console.log(result);
        
        expression=[];
    }
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
