


export class parser{
    constructor(operator_stack=[],numerical_stack=[]){
        this.operator_stack=operator_stack;
        this.numerical_stack=numerical_stack;
    }

    parse = () =>{
        tokenized_array.forEach(token => {
            if(token.type === "Digit"){
                this.numerical_stack.push(token.value);
            }
            else if(token.type==="Operator"){
                this.operator_stack.push(token.value);
            }
        });
    }


}




function compareOperators(op1, op2) {
    if (operatorsAssocivity[op2] === "L") {
        return operatorsPrecedence[op1] >= operatorsPrecedence[op2];
    } else {
        return operatorsPrecedence[op1] > operatorsPrecedence[op2];
    }
}

const parsed_object = new parser(); //creates a new object containing both arrays
parsed_object.parse(tokenized_array); //calls the function on that object.

