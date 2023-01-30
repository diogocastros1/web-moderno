const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // massa saiu
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove a primeira posicao
console.log(pilotos)

pilotos.unshift('Hamilton') //insere na priemira posicao
console.log(pilotos)

// com splice podemos colocar partindo de um indice, um ou mais elementos em sequencia
// lembrando que o primeiro numero, é o indice e o segundo é quantos deseja remover
//Add
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remove
pilotos.splice(3, 1) //massa sai
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array a partir do indice 2 de pilotos
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //  1 < indice < 4
console.log(algunsPilotos2)
