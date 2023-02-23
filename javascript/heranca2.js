//Cadeia de prototipos (prototype chain)
Object.prototype.attrb0 = '0' //Utilizado somente para demonstracao, nao é boa pratica
const avo = { attr1: 'A' }
//definindo que o pai vai herdar atributos do avo
const pai = { __proto__: avo, attrb2: 'B' }
//filho herda de pai e avo
const filho = { __proto__: pai, attrb3: 'C', attrb2: '3'}

//como o filho tbm tem o attrb2, este sombreou o attrb2 do pai
console.log(filho.attr1, filho.attrb2)

//caso o atributo nao seja encontrado em nenhuma das cadeias
//a ultima busca é feita no Object.prototype
console.log(filho.attrb0)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowning ou sombreamento
}

const volvo = {
    modelo: 'V40',
    status(){
        //super referencia
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //outra forma linkarmos a heranca
Object.setPrototypeOf(volvo, carro) //outra forma linkarmos a heranca

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(200)
console.log(ferrari.status())


