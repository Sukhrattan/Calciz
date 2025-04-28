
export class tokens{
    constructor(type,value){
        this.type = type;
        this.value = value;
    }

    tokenize = ()=>{
        const tokenized_array = [];
        
        this.expression.forEach(char=>{
           const type = getTokenType(char);
            
            if(type){
                tokenized_array.push(new tokens(type,char));
            }
        });
        return tokenized_array;
    }
   
}

const getTokenType = ()=>{
    if (/^\d+$/.test(char))   return "Digit";
    if (/\+|-|\*|\/|\^/.test(char)) return "Operator";
}







