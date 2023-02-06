//colecao dinamica de pares chave/valor
const produto = new Object //criando um objeto
//mesmo sem ter o atributo criado anteriormente, eh possivel 
//chama istancia-lo diretamente
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

//assim como podemos deletar
delete produto.preco
delete produto['marca do produto']
console.log(produto)

//Forma literal de criar objetos
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],

    calcularValorSeguro: function () {
        //.......
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
//embora condutores tenha sido deletado, o codigo nao quebra ao chamar condutores
console.log(carro.condutores)
/* 
console.log(carro.condutores.lenght)
ao tentarmos acessar um metodo especifico de condutores, ira retornar erro
 */