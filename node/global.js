// console.log(global)

//Desta forma é possivel alterar esta funcao em outros arquivos
// global.MinhaApp = {
//     saudacao() {
//         return 'Todos lugares'
//     },
//     nome: 'Sistema Global'
// }

global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Todos lugares'
    },
    nome: 'Sistema Global'
})
