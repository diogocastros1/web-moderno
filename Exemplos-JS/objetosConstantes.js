//pessoa esta apontando para um endereco 123 -> {um obj}
const pessoa = {nome:'Joao'} 
pessoa.nome = 'Pedro' //não estamos mudando o endereco de pessoa
//e sim alterando o objeto dentro do endereco de memoria
console.log(pessoa)

// pessoa = {nome: 'Ana'} //neste exemplpo estamos tentando atribuir um 
//novo endereco de memoria para pessoa, e como é uma constante isso retorna um erro

Object.freeze(pessoa) //congelado o qualquer mudanca ao obj e o torna imutavel
pessoa.nome = 'Maria'
delete pessoa.nome

console.log(pessoa)

//uma forma de bloquear o objeto no desde a criacao
const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Diogo'

console.log(pessoaConstante)