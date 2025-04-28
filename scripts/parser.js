
export class parser{
    constructor(operator_stack=[],numerical_stack=[],tokenized_array=[]){
        this.operator_stack=operator_stack;
        this.numerical_stack=numerical_stack;
        this.tokenized_array=tokenized_array;
    }

    parse = () =>{
        
        let len = this.operator_stack.length;
        this.tokenized_array.forEach(token => {
            if(token.type === "Digit"){
                this.numerical_stack.push(token.value);
            }
            else if(token.type==="Operator"){
                
                while(this.operator_stack.length>0 && compareOperators(token.value,this.operator_stack[this.operator_stack.length-1])){
                    this.numerical_stack.push(this.operator_stack.pop());
                    
                }
                this.operator_stack.push(token.value);
                
            }

        });
        while(this.operator_stack.length>0){
            this.numerical_stack.push(this.operator_stack.pop());
        }
        return this.numerical_stack;
        
    }
    

}

function compareOperators(op1, op2) {
    if (operatorsAssocivity[op2] === "L") {
        return operatorsPrecedence[op1] <= operatorsPrecedence[op2];
    } else {
        return operatorsPrecedence[op1] < operatorsPrecedence[op2];
    }
}


