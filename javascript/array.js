console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Joao')
console.log(aprovados.length)

aprovados[9] = 'Diogo' // ao efetuar esta inserção, setamos todas as demais posições como undefined
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort() // ordenando o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)

// o primeiro numero do metodo é o indice e o segundo são quantos elementos serao
// apagados/substituidos, neste caso estou apagando, mas se nao colocasse nada no id1 ou id2, 
// iria simplesmente apagar os arrays
aprovados.splice(1, 2, 'id1', 'id2') 
console.log(aprovados)
