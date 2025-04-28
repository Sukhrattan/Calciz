
export class tokens{
    constructor(type,value){
        this.type = type;
        this.value = value;
        
    }

    tokenize = ()=>{
        const stack = [];
        
        this.expression.forEach(char=>{
           const type = getTokenType(char);
            
            if(type){
                stack.push(new tokens(type,char));
            }
        });
        return stack;
    }
   
}

const getTokenType = (char)=>{
    if (/^\d+$/.test(char))   return "Digit";
    if (/\+|-|\*|\/|\^/.test(char)) return "Operator";
}







