let operatorsPrecedence = {
    "+":1,
    "-":1,
    "*":2,
    "/":2
}

let operatorsAssocivity = {
    "+":"L",
    "-":"L",
    "*":"L",
    "/":"L",
    "%":"L"
}





///....Functions to check if token is Digit or Operator.
function Digit(element) {
    return /^\d+$/.test(element);
}

function Operator(element) {
    return /\+|-|\*|\/|\^/.test(element);
}