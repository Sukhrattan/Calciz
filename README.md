# Calciz
A Functional Calculator Website.
Current Functionalities Include : Addition,Subtraction,Multipication,Division,AC,C
next tasks : 
1.Fix edge cases: 
a. if operator is added before numbers the calculator returns NaN.
b. Change Operator if two different operators are pressed at the same time
2. Clean up TRASHY CODE




#FUNCTIONALITY OF PATCH_1 VERSION
So basically the version 1 of the Calculator Works like this :


We added an event listener to all the keys(which are labelled as symbols and digit classes).
when a key is pressed, function(event), the event checks if the class pressed was symbol, if it was symbol it is pushed
into array called expressions, then if its numbers it is also pushed into the array, after that we use tokenizer function to create tokens , for that first of all we have a class called token with constructor (value,type). We check each element in the "expression" element and create a new object called token, which contains the type and the value of that certain expression. After that we pass the tokens into the parser which again pushes the digit to numerical stack, and operators to operator stack. Where we check the associvity of the operators to push them into order into the numerical stack using the shunting yard algorithm. After that we pass them into the calculator function that performs RPN (Reverse Polish Notation) and then we pass the output array into the calculation function where we calculate the expressions using RPN.