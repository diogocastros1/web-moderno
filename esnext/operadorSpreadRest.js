// Operador ... rest(juntar)/spread(espalhar)
// Usar o rest com parametro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12355.99 }
const clone = {ativo: true, ...funcionario}

console.log(clone)

// espalhando um array dentro de outro
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela' ]
console.log(grupoFinal)
