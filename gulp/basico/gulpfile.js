const gulp = require('gulp')
const {series, parallel} = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2')
    return cb()
}

function copiar(callback) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // outra forma de obter o mesmo resultado é a seguinte
    gulp.src(['pastaA/**/*.txt']) // copiando todo arquivo txt que esta dentro da pasta a e subpastas
        // .pipe(imagePelaMetade())
        // .pipe(imageEmPretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
        .pipe(gulp.dest('pastaB'))

    return callback()
}

const fim = cb => {
    console.log('Tarefa Fim')
    return cb()
}

// workflow da aplicação
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
    )