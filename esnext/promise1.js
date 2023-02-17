
let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bianca', 'Tiago', 'Giovanna'])
})// cumprirPromessa é geralemnte chamada de resolve

p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

// O then funciona de modo que vc recupera um valor no primeiro e utiliza
// este mesmo no próximo then

// É possivel utilizar as funções diretamente dentro dos then, conforme acima
// ou criar funções fora e chama-las dentro do then que o resultado é o mesmo

const priemiroElemento = valor => valor[0]
function primeiraLetra (string) {
    return string[0]
}

p
    .then(priemiroElemento)
    .then(primeiraLetra)
    .then(letra => letra.toLowerCase())
    // .then(letraMinuscula => console.log(letraMinuscula))
    .then(console.log) //quando passamos uma função que vai pegar somente um parametro
    // e passar para a mesma função, podemos declarar desta forma