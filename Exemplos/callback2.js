const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter(function(nota){ //notas.filter eh um sub array que filtra as notas 
    //passamos uma funcao que recebe uma nota que retorna as menores que 7
    return nota < 7
})

console.log(notasBaixas2)

//com callback e arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)