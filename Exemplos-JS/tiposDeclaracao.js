console.log(soma(1,2)) //chamando a funcao antes de ser declarada

//function declarition
//tem o beneficio de poder chamar a funcao antes mesmo de ser declarada como exemplo acima
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

//named function expression
const mult = function mult(x, y) {
    return x * y
}

