const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
//objetos criados com a notacao literal de objetos, sempre irao apontar para Object.prototype quando 
//nao possuirem este atributo
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObj(){}
console.log(typeof Object, typeof MeuObj)
console.log(Object.prototype, MeuObj.prototype)

