// arrow function
const soma = (a, b) => a + b //return implicito
const sub = (a, b) => {
    return a - b
} //return explicito
console.log(soma(2, 3))
console.log(sub(2, 3))

// this 
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

// parametro default
function log (texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest
function total(...numeros) {
    let total = 0 
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))