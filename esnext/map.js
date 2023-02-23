const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas  = new Map([
    [function() {}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

console.log(chavesVariadas)

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)

// Map é uma estrutura de chave valor onde a chave aceita 
// funcao string boolean entre outras