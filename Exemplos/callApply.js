function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto) }`     
}

const produto = {
    nome: 'Notebook', 
    preco: 4589,
    desc: 0.15,
    getPreco
}

//incluimos estes valores para fins de exemplo
global.preco = 20
global.desc = 0.1
//Neste exemplo o this do getPreco faz referencia a variavel global
console.log(getPreco())

//chamando desta forma o this do getProduto ja faz referencia ao objeto criado
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}

//outra forma de fazer com que o this faca referencia de um obj, eh utilizando o call
//e apply chamando direto a funcao global e mostrando em qual obj ela ira atuar
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//o que diferencia o call é que podemos ja passar os parametros que desejamos alterar
console.log(getPreco.call(carro, 0.17, '$'))

//no apply precisamos colocar um array para alterar os parametros
console.log(getPreco.apply(produto, [0.2, '$']))