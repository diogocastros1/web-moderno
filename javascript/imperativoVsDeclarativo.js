const alunos = [
    {nome:"João", nota:7.9},
    {nome:"Maria", nota:9.2}
]

//Imperativo
let total1 = 0
for (let i = 0; i< alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1/alunos.length)

/* Com o metodo Imperativo temos uma forma mais descrita 
do passo a passo para execução do código.
Mais preocupado em como fazer do que o que precisa. */

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2/alunos.length)

/* No metodo Declarativo temos uma forma um pouco mais complexa
de escrever mas uma forma que permite melhor reuso do das funções 
utilizadas. Mais preocupado com o que precisa do que como fazer. */