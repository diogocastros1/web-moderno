const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//para ter acesso a função factory precisamos colocar a () no final
const contadorC = require('./instanciaNova')() 
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()

console.log(contadorC.valor, contadorD.valor)
