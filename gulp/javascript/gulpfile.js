const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['env'] // javascript mais novo
        }))
        .pipe(uglify()) // converte o codigo para ser minificado
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js')) // padrão .min.js é utilizado para arquivos minificados
        .pipe(gulp.dest('build')) //definindo a pasta destino
}

function fim(cb) {
    console.log('Fim!!')
    return cb()
}

exports.default = series (transformacaoJS, fim)