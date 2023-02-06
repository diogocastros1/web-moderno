const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

//percorrendo a chave e valor do objeto
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//utilizando o destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNasc', {
    enumerable: true, //sera um dado visivel?
    writable: false, //sera alteravel?
    value: '01/01/2019' //valor setado
})

pessoa.dataNasc = '01/02/2010' //tentando setar um valor

//como definimos que a propriedade nao podera ser alterada,
//sera exibido o valor definido inicialmente
console.log(pessoa.dataNasc)

console.log(Object.keys(pessoa))

// Object.assign(ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
//com esta funcao concatenamos varias objetos em um so
//como a foi declarado em dois objetos, sera atribuido o ultimo valor a ele
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj) //congelar os atributos para evitar mudancas
obj.c = 1234
console.log(obj)

