const soma = function (x, y) {
    return x + y
}

/*uma funcao que possui 3 parametros, sendo um deles operacao que caso nao seja sobrescrito 
ira utilzar a funcao soma como default*/
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)

/*
neste exemplo estamos chamando uma funcao como parametro dentro de outra funcao
este recurso eh muito utilizado no JS
*/
imprimirResultado(3, 4, function (x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar()