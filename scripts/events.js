import { tokens } from "./tokenizer.js";
import {parser} from "./parser.js";

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
            const lengg = expression.length;
            if(!(Operator(expression[lengg-1]))){
            document.querySelector(".screen").innerHTML=pressedKeyValue;
            expression.push(pressedKeyValue);
        }
        }
    }

    if (pressedKeyValue == "=") {
        const object = new tokens(null,null,expression);
        const tokenized_array = object.tokenize();
        console.log(tokenized_array);
        const parsed_array = new parser([],[],tokenized_array);
        console.log(parsed_array.parse());
       
    }
};



function setupListener() {
    const buttons = keyList();
    buttons.forEach((button) => {
        button.addEventListener("click", key);
    });
}

setupListener();
