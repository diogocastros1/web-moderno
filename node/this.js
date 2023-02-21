console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma funcao...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...' //escopo global
}

logThis() //dentro de uma função o this não aponta para exports e sim para global


// Mas quando se trata de uma função arrow é o contrario
logThis2 = () => {
    console.log('Dentro de uma funcao arrow...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

}

logThis2()