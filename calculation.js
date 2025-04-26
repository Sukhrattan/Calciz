let sum=0;
let diff = 0;
let total;
const calculations = function(num1,num2,op){
    if(op == "+"){
        sum = num1 + num2;
        
    }
    if(op == "-"){
        diff = num1 - num2;
    }
    total = sum+diff
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
    console.log(sum);
}
