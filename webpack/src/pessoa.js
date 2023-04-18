// Como o node preciso do commons js para exportar arquivos, utuilizamos a forma abaixo
// module.exports = class Pessoa {
//     cumprimentar() {
//         return 'Bom dia!'
//     }
// }

// o webpack entende o recurso do ES8, portanto podemos utilizar desta forma
export default class Pessoa {
    cumprimentar() {
        return 'Bom dia!'
    }
}