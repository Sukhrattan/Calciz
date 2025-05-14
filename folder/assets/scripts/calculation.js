let sum=0;

const calculations = function(num2,num1,op){
    if(op == "+"){
        sum = num1 + num2;
        
    }
    if(op == "-"){
        sum = (num1 - num2);
    }
    if(op == "*"){
        sum = num1*num2;
    }
    if(op == "/"){
        sum = num1/num2;
    }
    calculation_stack.push(sum);
}


 
let calculation_stack = [];
const calculator = function (){
    output.forEach(element=>{
        if((!isNaN(element))){
            calculation_stack.push(parseInt(element));
        }
        else{
           calculations(calculation_stack.pop(),calculation_stack.pop(),element);
        }
    })
    console.log(calculation_stack);
    document.querySelector(".screen").innerHTML=calculation_stack;
}
